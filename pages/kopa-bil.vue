<script setup>
useHead({
  title: "Köpa bil på Bilweb Trading",
  meta: [
    {
      name: "description",
      content:
        "Vi arbetar idag med bilhandlare i Sverige och hela Europa. Bilweb har 1000-tals anslutna köpare och för att kunna köpa fordon på våra auktioner måste du vara en registrerad bilhandlare, i Sverige eller i annat EU-land.",
    },
  ],
});

definePageMeta({ layout: "public" });

const translations = {
  buy_at_bilweb_Title: [
    "Köpa bil på Bilweb Trading",
    "Buy cars at Bilweb Trading",
  ],
  buy_at_bilweb_Text: [
    "Vi arbetar idag med bilhandlare i Sverige och hela Europa. Bilweb har 1000-tals anslutna köpare och för att kunna köpa fordon på våra auktioner måste du vara en registrerad bilhandlare, i Sverige eller i annat EU-land. Du måste även ha ett företagskonto hos oss. Som handlare hittar du ett bra utbud av tidigare leasingbilar, företagsbilar och servicebilar. Många med låga mil, alltid noggrant testade och för det mesta i bra skick.",
    "Today we work with car dealers in Sweden and all over Europe. Bilweb has 1000s of registered dealers and in order to buy vehicles on our auctions you must be a registered car dealer, in Sweden or in another EU-country. You will also need to have a company account with us. As a dealer, you will find a good selection of former leased cars, company cars and service cars. Many with low mileage, always thoroughly inspected and most of the time in good condition.",
  ],
  we_know_cars: ["Vi kan bil, precis som du!", "We know cars, just like you!"],
  good_selection_of_cars: [
    "Bra utbud av tidigare leasingbilar, företagsbilar och tjänstebilar. ",
    "Good selection of used lease cars",
  ],
  tender_sales: [
    "Anbudsförsäljning med dold budgivning gör det enkelt för köpare.",
    "Tender sales with hidden bids",
  ],
  high_level_service: [
    "Hög service, säker betalning och vi kan bil, precis som du!",
    "High level of service and secure payment",
  ],
  want_to_register: [
    "Jag vill registrera mig som köpare!",
    "I want to register as a buyer",
  ],
  how_it_works_Title: [
    "Så fungerar det att köpa bil hos oss!",
    "This is how it works to buy a car from us!",
  ],
  how_it_works_Text: [
    "Vi publicerar auktioner varje vecka. Auktionerna läggs ut på fredagar och avslutas på tisdagar. När du blivit godkänd som köpare är det enkelt och smidigt att hitta fordon och lägga bud. Alla fordon är noggrant inspekterade och vi har avtal med transportörer för snabb leverans. Du får löpande notiser - och information och vi säkerställer självklart en trygg hantering av er betalning.",
    "We publish auctions every week. Auctions are posted on Fridays and close on Tuesdays. Once you've been approved as a buyer, finding vehicles and placing bids is easy and simple. All vehicles are thoroughly inspected and we have agreements with transport companies for fast delivery. You will receive notifications - and information - on a regular basis and we will of course ensure the secure handling of your payment.",
  ],
  register_account_Title: ["Registrering av konto", "Register an account"],
  register_account_Text: [
    "Är du registrerad bilhandlare kan du ansluta dig för att köpa fordon hos oss. Det är gratis.",
    "If you are a car dealer, you can register to buy vehicles from us. It is free of charge.",
  ],
  place_bids_Title: ["Budgivning", "Placing bids"],
  place_bids_Text: [
    "Det är enkelt att lägga bud och bevaka de fordon du är intresserad av.",
    "It's easy to place bids and keep track of the vehicles you're interested in.",
  ],
  auction_winner_Title: ["Vunnen auktion", "Winner of the auction"],
  auction_winner_Text: [
    "Högsta bud över reservationspris vinner auktionen. Du får notiser av oss.",
    "The highest bid above the reserve price wins the auction. You will receive notifications from us.",
  ],
  secure_payent_Title: ["Säker betalning (Escrow)", "Secure payment (Escrow)"],
  secure_payent_Text: [
    "Ni betalar oss och vi agerar escrow och släpper pengarna till säljaren efter köparen godkänt bilens skick.",
    "You pay us and we act as escrow and transfer the money to the seller after the buyer has approved the condition of the car.",
  ],
  transport_delivery_cert_Title: [
    "Transport och leveransgodkännande",
    "Transport and delivery certification",
  ],
  transport_delivery_cert_Text: [
    "Vi beställer och koordinerar transporten för svenska köpare. OBS! Alla bilar som köps via oss i syfte att exporteras från Sverige kräver en obligatorisk transport som bokas och arrangeras av köparen.",
    "We book and coordinate transport with Swedish buyers. OBS! All cars purchased from us with the purpose of being exported out from Sweden will require a mandatory transport, booked and arranged by the buyer.",
  ],
  registration_Title: ["Registrering", "Registration"],
  registration_Text: [
    "Efter köparen godkänt fordonet registreras det på köparen.",
    "After the buyer has approved the vehicle, it is registered on the buyer",
  ],
  want_to_buy_Title: [
    "Köpa in fordon via oss ni med?",
    "Want to buy vehicles from us too?",
  ],
  want_to_buy_Text: [
    "Ansök om att bli köpare redan idag och var med oss från start när vi lanserar Bilweb Trading.",
    "Register today to become a buyer and join us from the start as we launch Bilweb Trading.",
  ],
  want_to_know_more: ["Jag vill veta mer ", "Sign up"],
  mailsubject_know_more: [
    "Jag vill veta mer om hur jag köper bilar via er!",
    "I want to know more about buying on Bilweb Trading!",
  ],
  mailsubject_register: [
    "Jag vill registrera mig som köpare!",
    "I want to register as a buyer!",
  ],
  mailsubject_wtb: [
    "Jag vill registrera mig som köpare!",
    "I want to register as a buyer!",
  ],
};
</script>
<template>
  <div
    class="bg-slate-900"
    style="
      background-image: linear-gradient(
        to right bottom,
        #253244,
        #202b3d,
        #1b2535,
        #161e2e,
        #111827
      );
    "
  >
    <div class="mx-auto max-w-7xl py-8 lg:py-0 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-10 md:gap-40 items-center">
        <div>
          <h1
            class="font-medium tracking-tight inline bg-gradient-to-r from-sky-200 to-sky-300 bg-clip-text font-display text-4xl text-transparent"
          >
            {{ $translate("buy_at_bilweb_Title", translations) }}
          </h1>
          <p class="mt-6 text-lg text-gray-400">
            {{ $translate("buy_at_bilweb_Text", translations) }}
          </p>
          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <a
              class="rounded-lg inline-flex bg-slate-700 text-sm font-semibold py-3 px-4 text-white hover:bg-slate-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
              :href="
                'mailto:trading@bilweb.se?subject=' +
                $translate('mailsubject_know_more', translations)
              "
              ><span
                >{{ $translate("want_to_know_more", translations) }}
                <span class="text-white">→</span></span
              ></a
            >
          </div>
        </div>
        <div class="items-center rounded-lg p-8 lg:my-24 bg-gray-800">
          <img
            src="https://cdn.bilweb.se/trading/images/public/kopa_bil_salesman.webp"
            class="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            {{ $translate("we_know_cars", translations) }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate mb-12"></p>
        </div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-y-3 lg:gap-y-10 lg:gap-x-8 px-4 lg:max-w-none lg:grid-cols-3"
        >
          <div
            class="flex text-left lg:block lg:text-center border p-6 lg:p-10 shadow rounded-lg bg-gray-50"
          >
            <div class="sm:flex-shrink-0">
              <span
                class="mx-auto h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
              >
                <svg
                  class="w-6 h-6 lg:w-8 lg:h-8"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z"
                  />
                </svg>
              </span>
            </div>
            <div class="pl-5 lg:pl-0 sm:mt-0 sm:ml-3 lg:mt-5 lg:ml-0">
              <h3 class="font-medium text-gray-900">
                {{ $translate("good_selection_of_cars", translations) }}
              </h3>
              <p class="mt-2 text-gray-500"></p>
            </div>
          </div>
          <div
            class="flex text-left lg:block lg:text-center border p-6 lg:p-10 shadow rounded-lg bg-gray-50"
          >
            <div class="sm:flex-shrink-0">
              <span
                class="mx-auto h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#ffffff"
                  class="w-6 h-6"
                >
                  <path
                    d="M0 22h12v2h-12v-2zm11-1h-10c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2zm6.369-12.839l-2.246 2.197s6.291 5.541 8.172 7.144c.475.405.705.929.705 1.446 0 1.015-.888 1.886-1.95 1.819-.52-.032-.981-.303-1.321-.697-1.619-1.875-7.07-8.249-7.07-8.249l-2.245 2.196-5.857-5.856 5.957-5.857 5.855 5.857zm-12.299.926c-.195-.193-.458-.302-.733-.302-.274 0-.537.109-.732.302-.193.195-.303.458-.303.733 0 .274.11.537.303.732l5.513 5.511c.194.195.457.304.732.304.275 0 .538-.109.732-.304.194-.193.303-.457.303-.732 0-.274-.109-.537-.303-.731l-5.512-5.513zm8.784-8.784c-.195-.194-.458-.303-.732-.303-.576 0-1.035.467-1.035 1.035 0 .275.108.539.303.732l5.513 5.513c.194.193.456.303.731.303.572 0 1.036-.464 1.036-1.035 0-.275-.109-.539-.304-.732l-5.512-5.513z"
                  />
                </svg>
              </span>
            </div>
            <div class="pl-5 lg:pl-0 sm:mt-0 sm:ml-3 lg:mt-5 lg:ml-0">
              <h3 class="font-medium text-gray-900">
                {{ $translate("tender_sales", translations) }}
              </h3>
              <p class="mt-2 text-gray-500"></p>
            </div>
          </div>
          <div
            class="flex text-left lg:block lg:text-center border p-6 lg:p-10 shadow rounded-lg bg-gray-50"
          >
            <div class="sm:flex-shrink-0">
              <div class="flow-root">
                <span
                  class="mx-auto h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                >
                  <svg
                    class="w-6 h-6 lg:w-8 lg:h-8"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="pl-5 lg:pl-0 sm:mt-0 sm:ml-3 lg:mt-5 lg:ml-0">
              <h3 class="font-medium text-gray-900">
                {{ $translate("high_level_service", translations) }}
              </h3>
              <p class="mt-2 text-gray-500"></p>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-2xl mt-16">
          <a
            class="rounded-lg inline-flex bg-slate-700 text-sm font-semibold py-3 px-4 text-white hover:bg-slate-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
            :href="
              'mailto:trading@bilweb.se?subject=' +
              $translate('mailsubject_register', translations)
            "
            ><span
              >{{ $translate("want_to_register", translations) }}
              <span class="text-white">→</span></span
            ></a
          >
        </div>
      </div>
    </div>

    <div class="bg-gray-900">
      <div class="mx-auto max-w-7xl sm:px-2 text-center">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 text-center">
          <div class="mx-auto max-w-2xl">
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {{ $translate("how_it_works_Title", translations) }}
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-400">
              {{ $translate("how_it_works_Text", translations) }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="mx-auto max-w-2xl px-4 sm:px-6 text-center pt-6 sm:pt-8 pb-16 sm:pb-24"
      >
        <div class="text-left sm:flex border p-10 shadow rounded-lg bg-gray-50">
          <div class="flow-root">
            <ul role="list" class="-mb-8">
              <li>
                <div class="relative pb-16">
                  <span
                    class="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{
                            $translate("register_account_Title", translations)
                          }}
                        </p>
                        <p class="text text-slate-700">
                          {{
                            $translate("register_account_Text", translations)
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative pb-16">
                  <span
                    class="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.807 8.771l4.768-3.302-1.415-2.042c-.644-.928-1.678-1.427-2.727-1.427-.651 0-1.309.191-1.884.59l-2.045 1.415 3.303 4.766zm-5.184 5.609l3.302 4.767c1.286 1.857 3.353 2.853 5.452 2.853 3.628 0 6.623-2.944 6.623-6.634 0-1.302-.383-2.617-1.181-3.768l-3.301-4.765-10.895 7.547zm.52-9.431l-2.04 1.416c-1.506 1.042-1.881 3.106-.838 4.61l1.413 2.043 4.768-3.302-3.303-4.767zm-1.646 5.171c-.57-.823-.369-1.948.461-2.522l.807-.56 1.593 2.299-2.3 1.593-.561-.81zm-3.321-2.231l-2.499-1.74.62-.891 2.271 1.582c-.169.332-.3.681-.392 1.049zm.702 4.006l-2.299 1.615-.624-.888 2.414-1.699c.135.338.299.665.509.972zm-.778-1.906h-3.1v-1.085h3.029c-.013.366.005.729.071 1.085z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{ $translate("place_bids_Title", translations) }}
                        </p>
                        <p class="text text-slate-700">
                          {{ $translate("place_bids_Text", translations) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative pb-16">
                  <span
                    class="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#ffffff"
                          class="w-6 h-6"
                        >
                          <path
                            d="M0 22h12v2h-12v-2zm11-1h-10c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2zm6.369-12.839l-2.246 2.197s6.291 5.541 8.172 7.144c.475.405.705.929.705 1.446 0 1.015-.888 1.886-1.95 1.819-.52-.032-.981-.303-1.321-.697-1.619-1.875-7.07-8.249-7.07-8.249l-2.245 2.196-5.857-5.856 5.957-5.857 5.855 5.857zm-12.299.926c-.195-.193-.458-.302-.733-.302-.274 0-.537.109-.732.302-.193.195-.303.458-.303.733 0 .274.11.537.303.732l5.513 5.511c.194.195.457.304.732.304.275 0 .538-.109.732-.304.194-.193.303-.457.303-.732 0-.274-.109-.537-.303-.731l-5.512-5.513zm8.784-8.784c-.195-.194-.458-.303-.732-.303-.576 0-1.035.467-1.035 1.035 0 .275.108.539.303.732l5.513 5.513c.194.193.456.303.731.303.572 0 1.036-.464 1.036-1.035 0-.275-.109-.539-.304-.732l-5.512-5.513z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{ $translate("auction_winner_Title", translations) }}
                        </p>
                        <p class="text text-slate-700">
                          {{ $translate("auction_winner_Text", translations) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative pb-16">
                  <span
                    class="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm4 11.723v2.277h-2v-2.277c-.596-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{ $translate("secure_payent_Title", translations) }}
                        </p>
                        <p class="text text-slate-700">
                          {{ $translate("secure_payent_Text", translations) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative pb-16">
                  <span
                    class="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#ffffff"
                          class="w-6 h-6"
                        >
                          <path
                            d="M5 18h-1c-.552 0-1-.448-1-1v-2h12v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-10-8.8h-8v-2h8v-1h-5v-1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1v10h-11v-3h-2v-2h7v-1zm9 0v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{
                            $translate(
                              "transport_delivery_cert_Title",
                              translations
                            )
                          }}
                        </p>
                        <p class="text text-slate-700">
                          {{
                            $translate(
                              "transport_delivery_cert_Text",
                              translations
                            )
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative pb-16">
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M11.329 19.6c-.185.252-.47.385-.759.385-.194 0-.389-.06-.558-.183-.419-.309-.509-.896-.202-1.315l1.077-1.456c.308-.417.896-.508 1.315-.199.421.306.511.895.201 1.313l-1.074 1.455zm-.825-2.839c.308-.418.217-1.007-.201-1.316-.421-.308-1.008-.216-1.317.203l-1.073 1.449c-.309.419-.217 1.009.202 1.317.417.307 1.007.218 1.315-.202l1.074-1.451zm-1.9-1.388c.309-.417.217-1.007-.203-1.315-.418-.307-1.007-.216-1.314.202l-1.083 1.461c-.308.419-.209.995.209 1.304.421.308 1 .229 1.308-.19l1.083-1.462zm-1.898-1.386c.308-.419.219-1.007-.203-1.315-.419-.309-1.007-.218-1.315.201l-1.075 1.451c-.308.418-.217 1.008.202 1.315.419.307 1.008.218 1.315-.202l1.076-1.45zm17.294-8.438s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792v-6.302zm-10.524 12.662c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713-.165-.161-.421-.18-.608-.044-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359-.192-.712.093-1.411.727-1.781 1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231-1.373-.09-3.061-.403-3.061-.403v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624c.364-.496.949-.792 1.564-.792.87 0 1.622.578 1.861 1.388.951 0 1.667.602 1.898 1.387.826-.031 1.641.519 1.897 1.385 1.171 0 2.017.92 1.981 2.007l1.168 1.168c.367.368.963.367 1.331 0 .368-.368.368-.964 0-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033c.368.368.963.368 1.331 0s.368-.963 0-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701c.368.368.963.368 1.331 0 .358-.356.361-.922.027-1.291z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 space-x-4 pt-1.5">
                      <div>
                        <p class="text font-medium text-slate-900">
                          {{ $translate("registration_Title", translations) }}
                        </p>
                        <p class="text text-slate-700">
                          {{ $translate("registration_Text", translations) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section id="" class="relative overflow-hidden bg-gray-800 py-20 sm:py-28">
      <div
        class="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2"
      >
        <svg
          viewBox="0 0 558 558"
          width="558"
          height="558"
          fill="none"
          aria-hidden="true"
          class="animate-spin-slow"
        >
          <defs>
            <linearGradient
              id=":rg:"
              x1="79"
              y1="16"
              x2="105"
              y2="237"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff"></stop>
              <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            opacity=".2"
            d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
            stroke="#fff"
          ></path>
          <path
            d="M1 279C1 125.465 125.465 1 279 1"
            stroke="url(#:rg:)"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="mx-auto max-w-md text-center">
          <h2
            class="text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            {{ $translate("want_to_buy_Title", translations) }}
          </h2>
          <p class="mt-4 text-lg text-gray-300">
            {{ $translate("want_to_buy_Text", translations) }}
          </p>
          <div class="mt-8 flex justify-center">
            <a
              class="bg-sky-300 inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
              :href="
                'mailto:trading@bilweb.se?subject=' +
                $translate('mailsubject_wtb', translations)
              "
              ><span
                >{{ $translate("want_to_know_more", translations) }} →</span
              ></a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>