$(document).ready(function () {

    console.log('clicked')
    var data = [];
    var category = ['amirrrrali','amirrali','amirrrali','amirali'];
    var divided = false;

    //gets called every time user clicks add data
    $('.addData').click(function () {
        var x = $('#dataInput').val();
        var y = $('#catInput').val();
        if (x && !y) {
            $('#dataInput').removeAttr('value');
            data.push(parseInt(x))
            $('#dataShowCase').append(x + ',');
            $('#dataInput').val('');
        } else if (x && y) {
            divided = true;
            $('#dataInput').removeAttr('value');
            data.push(parseInt(x))
            $('#dataShowCase').append(x + ',');
            $('#dataInput').val('');
            $('#catInput').removeAttr('value');
            data.push(y);
            $('#catShowCase').append(y + ',');
            $('#catInput').val('');
        }
    })


    //gets called every time user clicks on submit
    $('.submitData').click(function () {
        //console.log(ss.mean(data).toFixed(2))
        init()
        showStuff()
    })

    function showStuff(){
        // $(".rw1").fadeIn(500);
        // $(".rw2").fadeIn(1000);
        // $(".rw3").fadeIn(1500);
        // $(".rw4").fadeIn(2000);
    }

    function init() {
        setHarmonicMean()
        setAritMean()
        setGeoMean()
        setMinData()
        setMaxData()
        setSumData()
        setDomain()
        setVariance()
        setStandardDevitation()
        setMedian()
        setMode()
        setSkewness()
        setBars()
    }

    //calculates harmonic mean
    function setHarmonicMean() {
        console.log(ss.harmonicMean(data).toFixed(2))
        var res = 'mean = ' + ss.harmonicMean(data).toFixed(2);
        $('.harmonicMean').text(res);
    }

    //calculates normal mean
    function setAritMean() {
        var res = 'mean = ' + ss.mean(data).toFixed(2)
        $('.mean').text(res)
    }

    //calculates geometric mean
    function setGeoMean() {
        var res = 'mean = ' + ss.geometricMean(data).toFixed(2)
        $('.geoMean').text(res)
    }

    //caluclets the smallest data
    function setMinData() {
        res = 'min = ' + ss.min(data)
        $('.minData').text(res)
    }

    function setMaxData() {
        res = 'max = ' + ss.max(data)
        $('.maxData').text(res)
    }

    function setSumData() {
        res = 'max = ' + ss.sum(data)
        $('.sumData').text(res)
    }

    function setVariance() {
        res = 'variance = ' + ss.variance(data);
        $('.variance').text(res);
    }

    function setDomain() {
        res = 'domain = ' + (ss.max(data) - ss.min(data));
        $('.domain').text(res)
    }

    function setStandardDevitation() {
        res = 'σ  = ' + ss.sampleStandardDeviation(data).toFixed(2);
        $('.stDev').text(res)
    }

    function setMode() {
        res = 'mode = ' + ss.mode(data);
        $('.mode').text(res)
    }

    function setMedian() {
        res = 'median = ' + ss.median(data);
        $('.median').text(res)
    }

    function setSkewness() {
        res = 'skewness = ' + ss.sampleSkewness(data);
        $('.skew').text(res);
    }

    function setBars() {
        var d3 = Plotly.d3;

        var WIDTH_IN_PERCENT_OF_PARENT = 100,
            HEIGHT_IN_PERCENT_OF_PARENT = 50;

        var gd3 = d3.select('#bars')
            .append('div')
            .style({
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

                height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
                'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
            });

        var gd = gd3.node();
        var dataa = [{
            //y: data,
            x: data,
            //values: data,
            type: 'histogram',
            title: 'histogram'
        }];
        var layout = {
            title: 'histogram'
        }

        Plotly.newPlot(gd, dataa,layout);
        window.onresize = function () {
            Plotly.Plots.resize(gd);
        };
    }
});