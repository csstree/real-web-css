/* eslint-env browser */
/* global discovery */

const dataByEl = new WeakMap();

new discovery.view.Popup({
    className: 'chart-tooltip',
    hoverTriggers: '.view-chart .bar',
    position: 'pointer',
    render(el, triggerEl) {
        const { data, context } = dataByEl.get(triggerEl);

        discovery.view.render(
            el,
            [
                { view: 'block', content: 'text:labelText' },
                {
                    view: 'block',
                    content: 'text-numeric:value = undefined ? "–" : value'
                }
            ],
            data,
            context
        );
    }
});

// CSS.registerProperty({
//     name: '--size',
//     initialValue: 0,
//     syntax: '<number>',
//     inherits: true,
// });

discovery.view.define('chart', (el, config, data, context) => {
    function addBar(x, y) {
        const barEl = canvasEl.appendChild(document.createElement('div'));
        const labelEl = xLabelsEl.appendChild(document.createElement('div'));
        const num = xLabelsEl.children.length - 1;
        const labelText = labelX(x, num);

        barEl.className = y === undefined ? 'bar empty' : 'bar';
        barEl.style.setProperty('--size', (y || 0) / roundedMaxY);
        labelEl.className = 'x-label';
        labelEl.textContent = labelText;
        labelEl.style.setProperty('--num', num);

        dataByEl.set(barEl, {
            context,
            data: {
                value: y,
                labelNum: num,
                labelRaw: x,
                labelText
            }
        });
    }

    const { vertical, sort = true } = config;
    let { nextX, labelX } = config;
    const sortedData = sort ? data.slice().sort((a, b) => (a.x < b.x ? -1 : 1)) : data;
    const maxY = sortedData.reduce((maxY, { y }) => Math.max(maxY, y), 0);
    let roundedMaxY = maxY;
    const minY = sortedData.reduce((minY, { y }) => Math.min(minY, y), Infinity);

    if (typeof nextX !== 'function') {
        nextX = (_, current) => current;
    }

    if (typeof labelX !== 'function') {
        labelX = value => value;
    }

    // find better split

    const canvasEl = el.appendChild(document.createElement('div'));
    const xLabelsEl = el.appendChild(document.createElement('div'));
    const yLabelsEl = el.appendChild(document.createElement('div'));

    canvasEl.className = 'canvas';
    xLabelsEl.className = 'x-labels';
    yLabelsEl.className = 'y-labels';

    // console.log({ minY, maxY });
    // round maxY
    if (maxY - minY > 5) {
        const allowedGrowth = maxY - minY < 20 ? 1.8 : 1.15;
        let base = maxY - minY < 100 ? 5 : 10;

        while (true) {
            const add = base - (roundedMaxY % base);

            if ((roundedMaxY + add) / maxY > allowedGrowth) {
                break;
            }

            roundedMaxY += add;
            // console.log({ normMaxY });
            base *= 10;
        }
    } else {
        roundedMaxY = 5;
    }

    for (
        let i = 0, n = roundedMaxY % 5 ? 5 : 6, step = roundedMaxY / (n - 1);
        i < n;
        i++
    ) {
        const labelEl = yLabelsEl.appendChild(document.createElement('div'));
        labelEl.textContent = step * i;
        labelEl.className = 'y-label';
    }

    let prev = sortedData[0].x;
    for (const { x, y } of sortedData) {
        while (prev !== x) {
            prev = nextX(prev, x);
            if (prev !== x) {
                addBar(prev);
            }
        }

        addBar(x, y);
        prev = x;
    }

    el.style.setProperty('--y-label-count', yLabelsEl.children.length);
    el.style.setProperty('--x-label-count', xLabelsEl.children.length);

    el.classList.toggle('vertical', Boolean(vertical));
    el.append(yLabelsEl, canvasEl, xLabelsEl);
});
