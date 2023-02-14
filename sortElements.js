/**
 * Sorts elements in a `.sortable-items` container by an `.sort-${property-name}` element text content, when clicked on an `.sort-${property-name}` element outside the container.
 *
 * Available sorting directions: `default`, `asc`, `desc`.
 *
 * Available data types for comparison: `string`, `int`.
 *
 * @param {object} type - data types `{ string: ['name', 'model'], int: ['quantity', 'formatedPrice'] }`.
 */
class SortElements {
    constructor(type) {
        (type.int ??= []).push('defaultSortId');
        this.type = type;
        this.initActionHandler();
    }

    initActionHandler() {
        document.addEventListener('click', e => {
            const sortBtn = e.target.closest('[class*="sort-"]');
            if (sortBtn && !sortBtn.closest('.sortable-items'))
                this.sortElements(this.getContainer(sortBtn), this.getProp(sortBtn), this.toggleSort(sortBtn));
        });
    }

    getContainer(sortBtn) {
        let container, parent = sortBtn.parentElement;
        do {
            parent = parent.parentElement;
            container = parent.querySelector('.sortable-items');
        } while (!container);
        return container;
    }

    getProp(sortBtn) {
        let propName;
        [...sortBtn.classList].some(str => propName = str.startsWith('sort-') ? str.substring(5) : '');
        return propName;
    }

    toggleSort(sortBtn) {
        const
            sorts = ['asc', 'desc'],
            curSort = [...sortBtn.classList].reduce((acc, cur) => sorts.includes(cur) ? cur : acc, ''),
            toggle = (el, sort) => sort === '' ? el.classList.add('asc') : (sort === 'asc' ? el.classList.replace(...sorts) : el.classList.remove('desc'));

        [...sortBtn.parentElement.children].forEach(el => el === sortBtn ? toggle(el, curSort) : el.classList.remove(...sorts));
        return sorts[sorts.indexOf(curSort) + 1];
    }

    sortElements(container, prop, sort) {
        prop = sort ? prop : 'defaultSortId';
        if (!this.isExistDefaultSort(container)) this.createDefaultSort(container);
        container.replaceChildren(...[...container.children].sort(this.getCompareFn(prop, sort)));
    }

    getCompareFn(prop, sort) {
        sort = sort ? sort : 'asc';
        const [first, second] = sort === 'asc' ? ['a', 'b'] : ['b', 'a'];
        if (this.type.string.includes(prop))
            return (a, b) => this.getValue(eval(first), prop).localeCompare(this.getValue(eval(second), prop));
        if (this.type.int.includes(prop))
            return (a, b) => parseInt(this.getValue(eval(first), prop).replace(/ /g, '')) - parseInt(this.getValue(eval(second), prop).replace(/ /g, ''));
    }

    isExistDefaultSort = container => typeof container.firstElementChild.dataset.defaultSortId === 'string';
    createDefaultSort = container => [...container.children].forEach((el, i) => el.dataset.defaultSortId = i);
    getValue = (el, prop) => prop === 'defaultSortId' ? el.dataset.defaultSortId : (el.classList.contains(`sort-${prop}`) ? el.textContent : el.querySelector(`.sort-${prop}`).textContent);
}
