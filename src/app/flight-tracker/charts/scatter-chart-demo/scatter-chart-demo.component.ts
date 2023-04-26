import { Component, Input } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';


@Component({
  selector: 'app-scatter-chart-demo',
  templateUrl: './scatter-chart-demo.component.html',
  styleUrls: ['./scatter-chart-demo.component.scss']
})
export class ScatterChartDemoComponent {
  private root!: am5.Root;
  @Input() data: Map<string, number>;

  ngAfterViewInit() {
    let root = am5.Root.new("scatterdemodiv");
    let data = Array.from(this.data).map(([id, count]) => ({category: id, value: count}))

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    let series1 = chart.series.push(
      am5xy.SmoothedXYLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryXField: "category"
      })
      /* am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category"
      }) */
    );
    series1.set("connect", false);
    series1.data.setAll(data);

    let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      this.root = root;

  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    if (this.root) {
      this.root.dispose();
    }
  }
}
