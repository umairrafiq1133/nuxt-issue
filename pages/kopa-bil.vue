<script setup>
const translate = (translation) => {
  const langIndex = getLangCode() == "en" ? 1 : 0;
  return translation ? translation[langIndex] : "-";
};

const getLangCode = () => {
  // grab current language from cookie | default to 'sv'
  const lang = useCookie("current_lang", {
    default: () => {
      code: "sv";
    },
  });
  return lang.value.code;
};

const translations = {
  buy_at_bilweb_Title: [
    "Köpa bil på Bilweb Trading",
    "Buy cars at Bilweb Trading",
  ],
};
</script>
<template>
  <div>{{ translate(translations["buy_at_bilweb_Title"]) }}</div>
</template>