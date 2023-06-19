import { Component, Input } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { AirTime } from '../../flight-tracker.model';


@Component({
  selector: 'app-scatter-chart-demo',
  templateUrl: './scatter-chart-demo.component.html',
  styleUrls: ['./scatter-chart-demo.component.scss']
})
export class ScatterChartDemoComponent {
  private root!: am5.Root;
  @Input() data: Map<string, AirTime[]>;

  ngAfterViewInit() {
    let root = am5.Root.new("scatterdemodiv");
    let series = Array.from(this.data).map(([carrierCode, dataArray]) => (
      {
        name: carrierCode, 
        data: dataArray.map(value => (
          {
            date: value.arrivalTime.getTime(),
            value: value.airTime,
            flightNumber: value.flightNumber
          }
        ))
      }))

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: "zoomXY",
        pinchZoomX:true,
        pinchZoomY:true,
        layout: root.verticalLayout
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );
    xAxis.data.setAll(series);

    series.forEach(s => 
      this.createSeries(xAxis, yAxis, s.name, s.data, chart, root))

    let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomXY",
        xAxis: xAxis
      }));
      
      xAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));
      
      yAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));

      this.root = root;

  }

  createSeries(xAxis, yAxis, name, data, chart, root) {
    let serial = chart.series.push( 
      am5xy.SmoothedXYLineSeries.new(root, { 
        name: name,
        xAxis: xAxis,
        yAxis: yAxis, 
        valueYField: "value", 
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{flightNumber}: {valueY} min"
        }),
        connect: false,
      }) 
    );
    serial.strokes.template.set("strokeOpacity", 0);

    serial.bullets.push(function() {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: serial.get("fill")
        })
      });
    });
    
    serial.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate('hh:mm')}: {valueY}")
    serial.data.setAll(data);
  }
  

  ngOnDestroy() {
    // Clean up chart when the component is removed
    if (this.root) {
      this.root.dispose();
    }
  }
}
