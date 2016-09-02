import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TooltipModule} from "../../src/index";

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
export class Sample1App {

}

@NgModule({
    imports: [
        BrowserModule,
        TooltipModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);