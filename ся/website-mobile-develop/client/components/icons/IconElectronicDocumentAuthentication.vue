<template>
  <i class="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      :fill="fill"
      fill-rule="evenodd"
    >
      <path d="M1.3 3.355C1.3 3.71 1 4 .655 4S0 3.7 0 3.355v-2.7A.65.65 0 0 1 .645 0h2.7A.65.65 0 0 1 4 .645C4 1 3.7 1.3 3.355 1.3H1.3v2.065zm17.4 13.3c0-.356.3-.645.645-.645s.645.3.645.645v2.7c0 .356-.3.645-.645.645h-2.7c-.356 0-.645-.3-.645-.645s.3-.645.645-.645H18.7v-2.065zm-18.7 0C0 16.3.3 16 .645 16s.645.3.645.645V18.7h2.064c.356 0 .645.3.645.645S3.7 20 3.355 20h-2.7A.65.65 0 0 1 0 19.355v-2.7zm20-13.3c0 .356-.3.645-.645.645s-.645-.3-.645-.645V1.3h-2.064C16.3 1.3 16 1 16 .645S16.3 0 16.645 0h2.7C19.7 0 20 .3 20 .645v2.7zM4 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.2 1.2v7.6h11.6V6.2H4.2zm5.8 6.3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3z" fill-rule="nonzero"/><rect y="9.5" width="20" height="1" rx=".5"/>
    </svg>
  </i>
</template>

<script>
  export default {
    name: 'IconElectronicDocumentAuthentication',
    props: {
      fill: {
        type: String,
        default: '#fd8f82'
      }
    }
  };
</script>