# escalade-price-store

An event-based store system for getting Escalade Sports pricing. Stores all fetched prices in a cookie for quick retrieval.

## Installation

```bash
yarn add escalade-price-store
```

## Usage

```javascript
import PriceStore from 'escalade-price-store'

const priceStore = new PriceStore({
	site: `goalrilla`,
	ids: [ `ID1`, `ID2` ]
})

function allChanged(prices){
	console.log(prices)
}

priceStore.addEvent(allChanged)

priceStore.removeEvent(allChanged)
```