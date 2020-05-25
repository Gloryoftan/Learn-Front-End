//Eharts Theme : "default" / "dark" / "grey"
JamEChart.colorTheme = "dark";
//$(".res-cntr") 即target container，是目标容器。
jEcharts = new JamEChart($(".res-cntr"), {
    type: "bar", //["bar", "pie", "map", "sunset", "tree", "sankey"]
    title: "标题",
    subTitle: "副标题",
    // itemColorSet: [ '#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8' ],
    // bgColor: undefined,
    // titleColor: 'hsla(0, 0%, 100%, 0.75)',
    // subTitleColor: 'hsla(0, 0%, 100%, 0.45)',
    // categoryAxisColor: 'hsla(0, 0%, 100%, 0.35)',
    // valueAxisColor: 'hsla(0, 0%, 100%, 0.35)',
    // logAxisColor: 'hsla(0, 0%, 100%, 0.35)',
    // timeAxisColor: 'hsla(0, 0%, 100%, 0.35)',
    // visualMap: {},
    // labelColor: undefined,
    // labelLineColor: undefined,
    // tooltipColor: undefined,
    // tooltipBgColor: 'hsla(0, 0%, 0%, 0.5)',
    // tooltipPointerColor: 'hsla(0, 0%, 100%, 0.5)',
    // tooltipAxisBgColor: 'hsla(0, 0%, 20%, 0.8)',
    // axixsColor: undefined,
    // gridColor: undefined,
    // axisPointerColor: undefined,
    // axisPointerBgColor: undefined,
    // legendColor: 'hsla(0, 0%, 100%, 0.65)',
    // xAxisLineColor: 'hsla(0, 0%, 100%, 0.35)',
    // yAxisLineColor: 'hsla(0, 0%, 100%, 0.35)',
    style: [
        /* animation */
        // JamEChart.style.animation.default,
        // JamEChart.style.animation.delay,
        /* axis */
        // JamEChart.style.axis.default,
        // JamEChart.style.axis.polar,
        // JamEChart.style.axis.hide,
        // JamEChart.style.axis.hideLine,
        // JamEChart.style.axis.hideLabel,
        // JamEChart.style.axis.hideTick,
        // JamEChart.style.axis.hideSplitLine,
        // JamEChart.style.axis.flipXY,
        // JamEChart.style.axis.shortenValueLabel,
        // JamEChart.style.axis.xAxisType,
        // JamEChart.style.axis.yAxisType,
        // JamEChart.style.axis.angleAxis,
        // JamEChart.style.axis.radiusAxis,
        // JamEChart.style.axis.rotateAxisLabel,
        // JamEChart.style.axis.labelFont,
        /* dataZoom */
        // JamEChart.style.dataZoom.default,
        // JamEChart.style.dataZoom.vertical,
        // JamEChart.style.dataZoom.position,
        /* legend */
        // JamEChart.style.legend.default,
        // JamEChart.style.legend.hide,
        // JamEChart.style.legend.horizontal,
        // JamEChart.style.legend.vertical,
        // JamEChart.style.legend.position,
        // JamEChart.style.legend.legendFont,
        // JamEChart.style.legend.itemForm,
        /* series */
        // JamEChart.style.series.byColumn,
        // JamEChart.style.series.byRow,
        // JamEChart.style.series.labelFont,
        /* shadow */
        // JamEChart.style.shadow.item,
        /* title */
        // JamEChart.style.title.default,
        // JamEChart.style.title.hide,
        // JamEChart.style.title.center,
        // JamEChart.style.title.position,
        // JamEChart.style.title.titleFont,
        // JamEChart.style.title.subtitleFont,
        // JamEChart.style.title.subtitlePostion,
        /* tooltip */
        // JamEChart.style.tooltip.default,
        // JamEChart.style.tooltip.hide,
        // JamEChart.style.tooltip.axisTrigger,
        // JamEChart.style.tooltip.line,
        // JamEChart.style.tooltip.shadow,
        // JamEChart.style.tooltip.cross,
        // JamEChart.style.tooltip.itemTrigger,
        // JamEChart.style.tooltip.tooltipFont,
        // JamEChart.style.tooltip.restricted,
    ],
});

dataset = [
    ["a", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    ["直接访问", 320, 302, 301, 334, 390, 330, 320],
    ["邮件营销", 120, 132, 101, 134, 90, 230, 210],
    ["联盟广告", 220, 182, 191, 234, 290, 330, 310],
    ["视频广告", 150, 212, 201, 154, 190, 330, 410],
    ["搜索引擎", 820, 832, 901, 934, 1290, 1330, 1320],
];

jEcharts
    .updateData({
        dataset: dataset,
    })
    .redraw();
