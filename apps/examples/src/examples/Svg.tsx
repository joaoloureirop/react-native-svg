import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Svg, Circle, G, Path, Line, Rect, SvgFromXml} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 200,
  },
  svg: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

class SvgExample extends Component {
  static title = 'SVG';
  render() {
    return (
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
    );
  }
}

class SvgOpacity extends Component {
  static title = 'SVG with `opacity` prop';
  render() {
    return (
      <Svg height="100" width="100" opacity="0.2">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
    );
  }
}

class SvgViewbox extends Component {
  static title =
    'SVG with `viewBox="40 20 100 40" and preserveAspectRatio="none"`';
  render() {
    return (
      <Svg
        height="100"
        width="100"
        viewBox="40 20 100 40"
        preserveAspectRatio="none">
        <Rect x="0" y="0" width="100" height="100" fill="red" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
        <Circle cx="40" cy="40" r="4" fill="black" />
        <Circle cx="60" cy="40" r="4" fill="black" />
        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
      </Svg>
    );
  }
}

class SvgLayout extends Component {
  static title = 'SVG with flex layout';
  render() {
    return (
      <View style={styles.container}>
        <Svg style={styles.svg}>
          <Rect
            width="80%"
            height="80%"
            x="10%"
            y="10%"
            fill="purple"
            stroke="yellow"
            strokeWidth="4"
          />
          <Line
            x1="10%"
            y1="10%"
            x2="90%"
            y2="90%"
            stroke="yellow"
            strokeWidth="4"
          />
          <Line
            x1="10%"
            y1="90%"
            x2="90%"
            y2="10%"
            stroke="yellow"
            strokeWidth="4"
          />
        </Svg>
      </View>
    );
  }
}

class SvgNativeMethods extends Component {
  static title =
    'Tap the shapes to render the Image below based on the base64-data of the Svg';
  state = {
    base64: null,
  };
  alert = () => {
    console.log('PRESSED');
    this.root?.toDataURL((base64: string) => {
      this.setState({
        base64,
      });
    });

    console.log(this.circle?.isPointInFill({x: 200, y: 100}));
    console.log(this.circle?.isPointInStroke({x: 200, y: 100}));
    console.log(this.circle?.getTotalLength());
    console.log(this.circle?.getPointAtLength(25));
    console.log(this.circle?.getBBox({fill: true}));
    console.log(this.circle?.getCTM());
    console.log(this.circle?.getScreenCTM());
  };
  root?: Svg | null;
  circle?: Circle | null;

  render() {
    return (
      <View>
        <Svg
          height="100"
          width="150"
          ref={ele => {
            this.root = ele;
          }}>
          <G x="40" onPress={this.alert}>
            <Circle
              cx="32"
              cy="32"
              r="4.167"
              fill="blue"
              ref={ele => {
                this.circle = ele;
              }}
            />
            <Path
              d="M55.192 27.87l-5.825-1.092a17.98 17.98 0 0 0-1.392-3.37l3.37-4.928c.312-.456.248-1.142-.143-1.532l-4.155-4.156c-.39-.39-1.076-.454-1.532-.143l-4.928 3.37a18.023 18.023 0 0 0-3.473-1.42l-1.086-5.793c-.103-.543-.632-.983-1.185-.983h-5.877c-.553 0-1.082.44-1.185.983l-1.096 5.85a17.96 17.96 0 0 0-3.334 1.393l-4.866-3.33c-.456-.31-1.142-.247-1.532.144l-4.156 4.156c-.39.39-.454 1.076-.143 1.532l3.35 4.896a18.055 18.055 0 0 0-1.37 3.33L8.807 27.87c-.542.103-.982.632-.982 1.185v5.877c0 .553.44 1.082.982 1.185l5.82 1.09a18.013 18.013 0 0 0 1.4 3.4l-3.31 4.842c-.313.455-.25 1.14.142 1.53l4.155 4.157c.39.39 1.076.454 1.532.143l4.84-3.313c1.04.563 2.146 1.02 3.3 1.375l1.096 5.852c.103.542.632.982 1.185.982h5.877c.553 0 1.082-.44 1.185-.982l1.086-5.796c1.2-.354 2.354-.82 3.438-1.4l4.902 3.353c.456.313 1.142.25 1.532-.142l4.155-4.154c.39-.39.454-1.076.143-1.532l-3.335-4.874a18.016 18.016 0 0 0 1.424-3.44l5.82-1.09c.54-.104.98-.633.98-1.186v-5.877c0-.553-.44-1.082-.982-1.185zM32 42.085c-5.568 0-10.083-4.515-10.083-10.086 0-5.568 4.515-10.084 10.083-10.084 5.57 0 10.086 4.516 10.086 10.083 0 5.57-4.517 10.085-10.086 10.085z"
              fill="blue"
            />
          </G>
        </Svg>
        <View style={{width: 150, height: 100, borderWidth: 1, marginTop: 5}}>
          {this.state.base64 && (
            <Image
              source={{uri: `data:image/png;base64,${this.state.base64}`}}
              style={{width: 150, height: 100}}
            />
          )}
        </View>
      </View>
    );
  }
}

class SvgHTMLEntities extends Component {
  static title =
    'SVG Xml with HTML Entities (&quot;)`';
  render() {
    return (
    <SvgFromXml
    xml={`<?xml version="1.0" encoding="utf-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs/>
  <rect width="512" height="512" style="stroke: rgb(0, 0, 0); fill: rgb(0, 128, 188); paint-order: stroke; stroke-width: 0px;" transform="matrix(1, 0, -0.000878, 1, -0.004006, 0.696297)" x="0&quot; y=&quot;0"/>
  <g style="" transform="matrix(2.042462, 0, 0, 2.042462, 61.412498, 18.832363)">
    <path d="M 93.805 53.477 L 58.547 111.491 C 58.27 111.946 57.628 111.996 57.285 111.589 C 54.182 107.904 42.617 92.224 56.926 77.934 C 69.984 64.893 86.615 55.595 92.779 52.382 C 93.478 52.017 94.215 52.803 93.805 53.477 Z" style="fill: rgb(255, 255, 255);"/>
    <path d="M 91.855 179.793 C 92.559 180.285 93.426 179.445 92.954 178.728 C 85.079 166.75 58.9 126.895 55.284 120.913 C 51.717 115.011 44.702 105.204 44.116 96.814 C 44.058 95.976 42.9 95.806 42.608 96.594 C 42.138 97.864 41.638 99.38 41.172 101.112 C 35.285 122.977 43.834 146.18 62.399 159.175 L 91.855 179.793 Z" style="fill: rgb(255, 255, 255);"/>
    <path d="M 96.698 178.761 L 131.956 120.746 C 132.232 120.292 132.876 120.241 133.218 120.648 C 136.322 124.333 147.886 140.013 133.577 154.304 C 120.52 167.344 103.889 176.642 97.725 179.855 C 97.026 180.22 96.289 179.434 96.698 178.761 Z" style="fill: rgb(255, 255, 255);"/>
    <path d="M 98.687 52.437 C 97.983 51.945 97.116 52.785 97.588 53.501 C 105.464 65.479 131.642 105.335 135.258 111.317 C 138.825 117.218 145.841 127.025 146.426 135.416 C 146.485 136.253 147.642 136.423 147.934 135.636 C 148.403 134.365 148.904 132.85 149.371 131.117 C 155.256 109.252 146.708 86.05 128.143 73.055 L 98.687 52.437 Z" style="fill: rgb(255, 255, 255);"/>
  </g>
</svg>`}
    />
    )
  }
}

const icon = (
  <Svg height="30" width="30" viewBox="0 0 20 20">
    <Circle cx="10" cy="10" r="8" stroke="blue" strokeWidth="1" fill="green" />
    <Rect
      x="4"
      y="4"
      width="12"
      height="12"
      stroke="red"
      strokeWidth="1"
      fill="yellow"
    />
  </Svg>
);

const samples = [
  SvgExample,
  SvgOpacity,
  SvgViewbox,
  SvgLayout,
  SvgHTMLEntities,
  SvgNativeMethods,
];

export {icon, samples};
