<template>
  <svg :width="width" fill="#a46fe2" :height="height" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
      <g id="Regula-landing-" transform="translate(-1610.000000, -69.000000)" >
        <g id="1-main" transform="translate(-3.000000, 0.000000)">
          <g id="header" transform="translate(104.000000, 40.000000)">
            <g id="language" transform="translate(1476.000000, 20.000000)">
              <polygon id="arrow" transform="translate(37.000000, 12.000000) scale(1, -1) translate(-37.000000, -12.000000) " points="37 9 41 15 33 15"></polygon>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconTriangle",
  props: {
    width: {
      type: String,
      default: '8px'
    },
    height: {
      type: String,
      default: '6px'
    }
  }
};
</script>