Vue.component("color-picker", {
    template: "#color-picker-template",
    props: ["change", "initial"],
    data: function() {
      return {
        isVisible: true,
        h: 265,
        s: 80,
        l: 99
      }
    },
    computed: {
      color: function() {
        var hsl = hsb2hsl(parseFloat(this.h) / 360, parseFloat(this.s) / 100, parseFloat(this.l) / 100)
  
        var c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
  
        var s = "hsl(" + c + ")";
        this.change({
          color: s
        });
        return s;
      },
      colorString: function() {
        var c = this.h + ", " + this.s + "%, " + this.l + "%"
        return c;
      },
      gradientH: function() {
        var stops = [];
        for (var i = 0; i < 7; i++) {
          var h = i * 60;
          
          var hsl = hsb2hsl(parseFloat(h / 360), parseFloat(this.s) / 100, parseFloat(this.l / 100))
          
          var c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%"
          stops.push("hsl(" + c + ")")
        }
  
        return {
          backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"
        }
      },
      gradientS: function() {
        var stops = [];
        var c;
        var hsl = hsb2hsl(parseFloat(this.h / 360), 0, parseFloat(this.l / 100))
        c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%"
        stops.push("hsl(" + c + ")")
  
        var hsl = hsb2hsl(parseFloat(this.h / 360), 1, parseFloat(this.l / 100))
        c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%"
        stops.push("hsl(" + c + ")")
  
        return {
          backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"
        }
      },
  
      gradientL: function() {
        var stops = [];
        var c;
  
        var hsl = hsb2hsl(parseFloat(this.h / 360), 0, 0)
        c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%"
        stops.push("hsl(" + c + ")")
  
        var hsl = hsb2hsl(parseFloat(this.h / 360), parseFloat(this.s / 100), 1)
  
        c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%"
        stops.push("hsl(" + c + ")")
  
        return {
          backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"
  
        }
      }
    },
    methods: {
  
      show: function() {
        this.isVisible = true;
      },
      hide: function() {
        this.isVisible = false;
      },
      toggle: function() {
        this.isVisible = !this.isVisible;
      }
    },
    
    mounted: function () {
      this.h = parseInt(Math.random() * 360)
    }
  })
  
  var app = new Vue({
    el: "#app",
    data: {
      color: ""
    },
    methods: {
      updateColor: function(event) {
        this.color = event.color;
      }
    }
  })
  
  function hsb2hsl(h, s, b) {
    var hsl = {
      h: h
    };
    hsl.l = (2 - s) * b;
    hsl.s = s * b;
  
    if (hsl.l <= 1 && hsl.l > 0) {
      hsl.s /= hsl.l;
    } else {
      hsl.s /= 2 - hsl.l;
    }
  
    hsl.l /= 2;
  
    if (hsl.s > 1) {
      hsl.s = 1;
    }
    
    if (!hsl.s > 0) hsl.s = 0
  
  
    hsl.h *= 360;
    hsl.s *= 100;
    hsl.l *= 100;
  
    return hsl;
  }