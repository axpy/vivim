<template>
  <i class="icon">
    <svg
      width="24px"
      height="16px"
      viewBox="0 0 341.333 341.333"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
<g>
	<g>
		<rect y="277.333" width="550" height="42.667"/>
	</g>
</g>
<g>
	<g>
		<rect y="149.333" width="550" height="42.667"/>
	</g>
</g>
<g>
	<g>
		<rect y="21.333" width="550" height="42.667"/>
	</g>
</g>
    </svg>
  </i>
</template>

<script>
export default {
  name: 'IconMenu'
};
</script>

<style lang="scss" scoped>
i > svg {
  & {
    cursor: pointer;
    fill: $color-dark-1;
    transition: fill $transition-time-short;
  }
  &:hover {
    fill: $color-primary;
  }
}
</style>