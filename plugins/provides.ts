const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString(getLocale(), { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }).replace(/\./g, '');
  const capitalizedDate = formattedDate.replace(/^\w/, (match) => match.toLocaleUpperCase(getLocale()));
  return capitalizedDate;
}

const getDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(getLocale(), { year: 'numeric', month: '2-digit', day: '2-digit' });
}

const getLocale = (): string => {
  return getLangCode() == "en" ? 'en-GB' : 'sv-SE';
}

const separateThousands = (num: number): string => {
    num = Math.round(num);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

const getLangCode = (): string => {
  // grab current language from cookie | default to 'sv'
  const lang = useCookie<Language>("current_lang");
  return lang.value?.code ?? "sv";
};

// For vehicle.title, use vehicle[$lang('title')]
const lang = (key: string): string => {
  const postfix = getLangCode() == "en" ? "En" : "";
  return key + postfix;
};

const translate = (key: string, translations: Translations): string => {
  if (key.length === 0 || !translations) return "-";

  const langIndex = getLangCode() == "en" ? 1 : 0;
  return translations ? translations[key][langIndex] : "-";
};

const vehicleImageThumbnail = (images: { path: string }[]) => {
  return imageSmall(images ? images[0].path : '')
};

const imageSmall = (imagePath: string) => {
  return getImageBySize(imagePath, 'small')
}

const imageMedium = (imagePath: string) => {
  return getImageBySize(imagePath, 'medium')
}

const imageFull = (imagePath: string) => {
  return getImageBySize(imagePath, 'full')
}

const getImageBySize = (imagePath: string, size: string) => {

  if(imagePath.length > 0 && imagePath.endsWith('.jpg')) {

    let imageType = (size === 'small' || size === 'medium') ? '-' + size : ''
    return 'https://cdn.bilweb.se/' + imagePath.replace(/.{0,4}$/, imageType + '.jpg')

  } else {
    return '/images/placeholder.svg'
  }

}

const getTestProtocolUrl = (protcolPath: String) => {
  const prePath = 'https://cdn.bilweb.se/'

  if (!protcolPath || protcolPath.trim() === '') {
    return '';
  } else if (getLangCode() === 'en') {
    const newFilename = protcolPath.replace('Testprotokoll', 'Inspection-protocol');
    return prePath+newFilename;
  } else {
    return prePath+protcolPath;
  }
}

const getSettlementUrl = (protcolPath: String) => {
  const prePath = 'https://cdn.bilweb.se/'

  if (!protcolPath || protcolPath.trim() === '') {
    return '';
  } else {
    return prePath+protcolPath;
  }
}

const vehicleFeatureLine = (vehicle: Vehicle): string => {
  const features = [
    ...(vehicle.registrationNumber ? [vehicle.registrationNumber] : []),
    ...(vehicle.mileage ? [separateThousands(vehicle.mileage) + " km"] : []),
    ...(vehicle[lang("features") as "features" | "featuresEn"] ?? []),
  ];

  return features.join(" | ") ?? "-";
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate,
      getDate,
      separateThousands,
      translate,
      lang,
      vehicleImageThumbnail,
      vehicleFeatureLine,
      imageSmall,
      imageMedium,
      imageFull,
      getLangCode,
      getTestProtocolUrl,
      getSettlementUrl,
    },
  };
});

interface Translations {
  [key: string]: string[];
}

interface Language {
  name: string;
  code: string;
}

interface Vehicle {
  registrationNumber: string;
  mileage: number;
  features: string[];
  featuresEn: string[];
}