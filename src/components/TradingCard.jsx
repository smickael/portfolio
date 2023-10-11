export const TradingCard = () => {
  return (
    <div class="m-auto flex h-screen w-full items-center justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-900 via-purple-900 to-blue-900">
      <div class="relative h-[830px] w-[600px] rounded-3xl border-[24px] border-yellow-200 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-500 via-red-200 to-red-500 px-4 shadow-2xl">
        <div class="flex w-full justify-end gap-x-4">
          <p class="font-semibold italic">Evolves from Charmelon</p>
          <p>Put Charizard on the Stage I card</p>
        </div>
        <div class="flex w-full flex-row-reverse justify-between border-t-4 border-yellow-300">
          <div class="flex">
            <p class="text-3xl font-bold text-red-700">120 HP</p>
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="-mt-2 h-10 w-10"
            />
          </div>
          <p class="ml-24 text-3xl font-bold">Charizard</p>
        </div>
        <div class="relative mx-2 border-[12px] border-yellow-200">
          <div class="absolute z-10 -ml-8 -mt-12 h-20 w-20 rotate-[30deg] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-200 to-yellow-100"></div>
          <div class="absolute z-10 -ml-8 -mt-12 h-20 w-20 rotate-[60deg] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-200 to-yellow-100"></div>
          <div class="absolute z-10 -ml-8 -mt-12 h-20 w-20 rotate-45 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-700 via-yellow-500 to-yellow-600"></div>
          <div class="absolute z-10 -ml-8 -mt-8 flex h-14 w-20 flex-col items-center bg-blue-300">
            <span class="-mt-5 text-sm font-bold">STAGE 2</span>
            <img
              src="https://www.gamosaurus.com/wp-content/uploads/Pokemon/Images/Artworks/005.png"
              class="mx-auto h-14"
            />
          </div>
          <img src="https://static.wikia.nocookie.net/pokemonfanon/images/2/25/Ash%27s_Charizard.png/revision/latest?cb=20161117165330" />
        </div>
        <div class="mx-10 mt-2 flex justify-center bg-gradient-to-r from-yellow-600 via-yellow-100 to-yellow-600">
          <span class="font-semibold italic">
            Flame Pokémon. Length: 5' 7'', Weight: 200 lbs.
          </span>
        </div>
        <div class="mx-10 mb-2 mt-4">
          <span class="text-justified">
            <p class="inline text-xl font-bold tracking-wider text-blue-900">
              Pokémon Power: Energy Burn
            </p>
            As often as you
            <br />
            like during your turn (before your attack), you may turn
            <br />
            all Energy attached to Charizard into{" "}
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="-mt-1 inline h-5 w-5"
            />{" "}
            Energy for the
            <br />
            rest of the turn. This power can't be used if Charizard
            <br />
            is Asleep, Confused or Paralyzed.
          </span>
        </div>
        <div class="flex w-full items-center justify-between gap-x-3 border-y-4 border-black py-1">
          <div class="grid shrink-0 grid-cols-2 grid-rows-2 gap-2">
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="inline h-8 w-8"
            />
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="inline h-8 w-8"
            />
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="inline h-8 w-8"
            />
            <img
              src="https://toppng.com/uploads/thumbnail/69kib-375x360-fire-pokemon-fire-energy-115629076719zqwurhkpa.png"
              class="inline h-8 w-8"
            />
          </div>
          <div>
            <span class="text-lg">
              <h1 class="inline text-2xl font-bold">Fire Spin</h1>
              Discard 2 Energy cards attached to Charizard in order to use this
              attack.
            </span>
          </div>
          <p class="text-6xl">100</p>
        </div>
        <div class="flex w-full justify-around">
          <div class="flex flex-col items-center">
            <p class="font-bold">weakness</p>
            <img
              src="https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png"
              class="h-8 w-8"
            />
          </div>
          <div class="flex flex-col items-center">
            <p class="font-bold">resistance</p>
            <img
              src="https://www.pngkit.com/png/full/353-3532588_pokemon-fighting-type-symbol-pokemon-card-fighting-energy.png"
              class="h-8 w-8"
            />
          </div>
          <div class="flex flex-col items-center">
            <p class="font-bold">retreat cost</p>
            <div class="flex gap-x-1">
              <img
                src="https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/abd7fb53-b69e-416a-bba5-54adc4f3bf68/HNv9RZi.png"
                class="h-8 w-8"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/abd7fb53-b69e-416a-bba5-54adc4f3bf68/HNv9RZi.png"
                class="h-8 w-8"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/abd7fb53-b69e-416a-bba5-54adc4f3bf68/HNv9RZi.png"
                class="h-8 w-8"
              />
            </div>
          </div>
        </div>
        <div class="m-2 border-4 border-yellow-300 px-6">
          <p class="font-bold italic">
            Spits fire that is hot enough to melt boulders. Known to
            unintentionally cause forest fires. LV. 76 #6
          </p>
        </div>

        <div class="flex w-full justify-between text-xs font-semibold">
          <p>Illus. Mitsuhiro Arita</p>
          <p>1995, 96, 98 Nintendo, Creatures, GAMEFREAK</p>
          <p>4/102</p>
        </div>
      </div>
    </div>
  );
};
