# sortElements

 Sorts elements in a `.sortable-items` container by an `.sort-${property-name}` element text content, when clicked on an `.sort-${property-name}` element outside the container.
 
 Available sorting directions: `default`, `asc`, `desc`.
 
 Available data types for comparison: `string`, `int`.

## Example [see demo](https://fesawder.github.io/sort-elements/)

```html
<h2>Example with table</h2>
<table>
    <thead>
        <th class="sort-name">Name</th>
        <th class="sort-store">Store</th>
        <th class="sort-quantity">Quantity</th>
        <th class="sort-price">Cost</th>
        <th class="sort-priceSum">Total cost</th>
    </thead>
    <tbody class="sortable-items">
        <tr>
            <td class="sort-name">Lamp</td>
            <td class="sort-store">Moskov</td>
            <td class="sort-quantity">1</td>
            <td class="sort-price">526 $</td>
            <td class="sort-priceSum">526 $</td>
        </tr>
        <tr>
            <td class="sort-name">Table</td>
            <td class="sort-store">Voronezh</td>
            <td class="sort-quantity">3</td>
            <td class="sort-price">28 125 $</td>
            <td class="sort-priceSum">28 125 $</td>
        </tr>
        <tr>
            <td class="sort-name">Sofa</td>
            <td class="sort-store">Belgorod</td>
            <td class="sort-quantity">2</td>
            <td class="sort-price">1 440 $</td>
            <td class="sort-priceSum">1 440 $</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4"></td>
            <td>30 091 $</td>
        </tr>
    </tfoot>
</table>

<h2>Example with blocks</h2>

<style>
    div.head {
        display: flex;
    }

    div.head>div {
        padding: 5px;
    }

    section.sortable-items {
        display: flex;
        flex-direction: column;
    }

    section.sortable-items>div {
        display: flex;
    }

    section.sortable-items>div>div {
        padding: 5px;
    }
</style>

<div>
    <div class="head">
        <div class="sort-name">Name</div>
        <div class="sort-store">Store</div>
        <div><span class="sort-quantity">Quantity</span></div>
        <div class="sort-cost"><span>Cost</span></div>
        <div class="sort-total-cost">Total cost</div>
    </div>
    <section class="sortable-items">
        <div>
            <div>Text that will not be sorted<span class="sort-name">Lamp</span></div>
            <div class="sort-store">Moskov</div>
            <div class="sort-quantity">1</div>
            <div class="sort-cost">526 $</div>
            <div class="sort-total-cost">526 $</div>
        </div>
        <div>
            <div class="sort-name">Table</div>
            <div class="sort-store">Voronezh</div>
            <div class="sort-quantity">3</div>
            <div class="sort-cost">28 125 $</div>
            <div class="sort-total-cost">28 125 $</div>
        </div>
        <div>
            <div class="sort-name">Sofa</div>
            <div class="sort-store">Belgorod</div>
            <div class="sort-quantity">2</div>
            <div class="sort-cost">1 440 $</div>
            <div class="sort-total-cost">1 440 $</div>
        </div>
    </section>
</div>

<script>
    // Set sort types
    new SortElements({
        string: ['name', 'store'],
        int: ['quantity', 'price', 'priceSum', 'cost', 'total-cost']
    });
</script>
```
