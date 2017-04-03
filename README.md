> This repository is for demonstration purposes of how it can be implemented in Angular and is not maintaned. Please fork and maintain your own version of this repository.

# ngx-tooltip

Simple tooltip control for your angular2 applications using bootstrap3. Does not depend of jquery.
If you want to use it without bootstrap - simply create proper css classes. Please star a project if you liked it, or create an issue if you have problems with it.

![angular 2 tooltip](https://raw.githubusercontent.com/pleerock/ngx-tooltip/master/resources/tooltip-example.png)

## Installation

1. Install npm module:

    `npm install ngx-tooltip --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ngx-tooltip": "node_modules/ngx-tooltip"
        },
        "packages": {
            "ngx-tooltip": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

Example of simple usage:

```html
<span tooltip="content to be shown in the tooltip"
      [tooltipDisabled]="false"
      [tooltipAnimation]="true"
      tooltipPlacement="top">
    element on which this tooltip is applied.
</span>
```

Example of usage with dynamic html content:

```html
<tooltip-content #myTooltip [animation]="true" placement="left">
    <b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>
    <b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>.
</tooltip-content>

<button [tooltip]="myTooltip">element on which this tooltip is applied.</button>
```

* `<span tooltip>`:
    * `tooltip="string"` The message to be shown in the tooltip.
    * `[tooltipDisabled]="true|false"` Indicates if tooltip should be disabled. If tooltip is disabled then it will not be shown. Default is **false**
    * `[tooltipAnimation]="true|false"` Indicates if all tooltip should be shown with animation or not. Default is **true**.
    * `tooltipPlacement="top|bottom|left|right"` Indicates where the tooltip should be placed. Default is **"bottom"**.
* `<tooltip-content>`:
    * `[animation]="true|false"` Indicates if all tooltip should be shown with animation or not. Default is **true**.
    * `placement="top|bottom|left|right"` Indicates where the tooltip should be placed. Default is **"bottom"**.

## Sample

```typescript
import {Component} from "@angular/core";
import {TooltipModule} from "ngx-tooltip";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- regular tooltip -->
    <p>
        It is a long established <span tooltip="Hello fact!"><b>fact</b></span> that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        <span tooltip="many, but not all" tooltipPlacement="left"><b>Many desktop</b></span> publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        <span tooltip="various, but not all" tooltipPlacement="right"><b>Various versions</b></span> have evolved over the years, sometimes by accident, <span tooltip="another hint" tooltipPlacement="top"><b>sometimes on purpose</b></span> (injected humour and the like)
    </p>

    <!-- tooltip with dynamic html content -->
    <div>
        <tooltip-content #myTooltip>
            <b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>
            <b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>.
        </tooltip-content>

        <button [tooltip]="myTooltip">hover this button to see a tooltip</button>
    </div>

</div>
`
})
export class App {

}

@NgModule({
    imports: [
        // ...
        TooltipModule
    ],
    declarations: [
        App
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ngx-tooltip/tree/master/sample) for more examples of
usages.
