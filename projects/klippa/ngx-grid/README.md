# Klippa Grid Framework

## Usage
To use the grid system, first import it into your angular module:

```ts
import {NgModule} from '@angular/core';
import {NgxGridModule} from '@klippa/ngx-grid';

@NgModule({
	imports: [ NgxGridModule ],
	declarations: [ MyComponent ],
	exports: [ MyComponent ],
})
export class MyModule {}
```

Then use the components in the template:

```html
<klp-grid-container>
	<klp-grid-row>
		<klp-grid-column>
			<!-- ... -->
		</klp-grid-column>
	</klp-grid-row>
</klp-grid-container>
```

