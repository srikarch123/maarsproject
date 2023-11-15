let heatmap;
function heatmap1() {
  console.log(getPoints);

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getweightedPoints(),
    map: map,
    //color:green,

  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 5);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.01);
}

function getweightedPoints() {
  return [
    { location: new google.maps.LatLng(40.84725542, -96.46714728), weight: 3 },
    { location: new google.maps.LatLng(40.84727926, -96.46716597), weight: 2 },
    { location: new google.maps.LatLng(40.84730310, -96.46718466), weight: 6 },
    { location: new google.maps.LatLng(40.84732694, -96.46720335), weight: 5 },
    { location: new google.maps.LatLng(40.84735078, -96.46722204), weight: 6 },

    { location: new google.maps.LatLng(40.84737462, -96.46724073), weight: 3 },

    { location: new google.maps.LatLng(40.84739847, -96.46725942), weight: 1 },

    { location: new google.maps.LatLng(40.84742231, -96.46727811), weight: 6 },

    { location: new google.maps.LatLng(40.84744615, -96.46729680), weight: 6 },

    { location: new google.maps.LatLng(40.84746999, -96.46731549), weight: 3 },

    { location: new google.maps.LatLng(40.84749383, -96.46733418), weight: 9 },

    { location: new google.maps.LatLng(40.84751767, -96.46735287), weight: 7 },

    { location: new google.maps.LatLng(40.84754152, -96.46737156), weight: 8 },

    { location: new google.maps.LatLng(40.84756536, -96.46739025), weight: 3 },

    { location: new google.maps.LatLng(40.84758920, -96.46740894), weight: 9 },

    { location: new google.maps.LatLng(40.84761304, -96.46742763), weight: 1 },

    { location: new google.maps.LatLng(40.84763688, -96.46744632), weight: 1 },

    { location: new google.maps.LatLng(40.84766072, -96.46746501), weight: 1 },

    { location: new google.maps.LatLng(40.84768457, -96.46748370), weight: 1 },

    { location: new google.maps.LatLng(40.84770841, -96.46750239), weight: 9 },

    { location: new google.maps.LatLng(40.84773225, -96.46752108), weight: 8 },

    { location: new google.maps.LatLng(40.84775609, -96.46753977), weight: 5 },

    { location: new google.maps.LatLng(40.84777993, -96.46755846), weight: 1 },

    { location: new google.maps.LatLng(40.84780377, -96.46757715), weight: 6 },

    { location: new google.maps.LatLng(40.84782761, -96.46759584), weight: 6 },

    { location: new google.maps.LatLng(40.84785146, -96.46761453), weight: 5 },

    { location: new google.maps.LatLng(40.84787530, -96.46763322), weight: 7 },

    { location: new google.maps.LatLng(40.84789914, -96.46765191), weight: 1 },

    { location: new google.maps.LatLng(40.84792298, -96.46767060), weight: 9 },

    { location: new google.maps.LatLng(40.84794682, -96.46768929), weight: 1 },

    { location: new google.maps.LatLng(40.84797066, -96.46770798), weight: 7 },

    { location: new google.maps.LatLng(40.84799451, -96.46772667), weight: 2 },

    { location: new google.maps.LatLng(40.84801835, -96.46774536), weight: 1 },

    { location: new google.maps.LatLng(40.84804219, -96.46776405), weight: 8 },

    { location: new google.maps.LatLng(40.84806603, -96.46778274), weight: 5 },

    { location: new google.maps.LatLng(40.84808987, -96.46780143), weight: 8 },

    { location: new google.maps.LatLng(40.84811371, -96.46782012), weight: 2 },

    { location: new google.maps.LatLng(40.84813756, -96.46783881), weight: 5 },

    { location: new google.maps.LatLng(40.84816140, -96.46785750), weight: 6 },

    { location: new google.maps.LatLng(40.84818524, -96.46787619), weight: 3 },

    { location: new google.maps.LatLng(40.84820908, -96.46789488), weight: 5 },





    { location: new google.maps.LatLng(40.84817727, -96.46798329), weight: 3 },

    { location: new google.maps.LatLng(40.84815323, -96.46796449), weight: 9 },

    { location: new google.maps.LatLng(40.84812918, -96.46794569), weight: 2 },

    { location: new google.maps.LatLng(40.84810514, -96.46792689), weight: 1 },

    { location: new google.maps.LatLng(40.84808110, -96.46790809), weight: 6 },

    { location: new google.maps.LatLng(40.84805706, -96.46788929), weight: 2 },

    { location: new google.maps.LatLng(40.84803302, -96.46787049), weight: 3 },

    { location: new google.maps.LatLng(40.84800897, -96.46785169), weight: 8 },

    { location: new google.maps.LatLng(40.84798493, -96.46783290), weight: 5 },

    { location: new google.maps.LatLng(40.84796089, -96.46781410), weight: 3 },

    { location: new google.maps.LatLng(40.84793685, -96.46779530), weight: 9 },

    { location: new google.maps.LatLng(40.84791281, -96.46777650), weight: 4 },

    { location: new google.maps.LatLng(40.84788876, -96.46775770), weight: 1 },

    { location: new google.maps.LatLng(40.84786472, -96.46773890), weight: 6 },

    { location: new google.maps.LatLng(40.84784068, -96.46772010), weight: 9 },

    { location: new google.maps.LatLng(40.84781664, -96.46770130), weight: 1 },

    { location: new google.maps.LatLng(40.84779259, -96.46768250), weight: 4 },

    { location: new google.maps.LatLng(40.84776855, -96.46766370), weight: 5 },

    { location: new google.maps.LatLng(40.84774451, -96.46764490), weight: 2 },

    { location: new google.maps.LatLng(40.84772047, -96.46762610), weight: 1 },

    { location: new google.maps.LatLng(40.84769643, -96.46760730), weight: 2 },

    { location: new google.maps.LatLng(40.84767238, -96.46758850), weight: 1 },

    { location: new google.maps.LatLng(40.84764834, -96.46756971), weight: 6 },

    { location: new google.maps.LatLng(40.84762430, -96.46755091), weight: 5 },

    { location: new google.maps.LatLng(40.84760026, -96.46753211), weight: 2 },

    { location: new google.maps.LatLng(40.84757622, -96.46751331), weight: 1 },

    { location: new google.maps.LatLng(40.84755217, -96.46749451), weight: 3 },

    { location: new google.maps.LatLng(40.84752813, -96.46747571), weight: 4 },

    { location: new google.maps.LatLng(40.84750409, -96.46745691), weight: 7 },

    { location: new google.maps.LatLng(40.84748005, -96.46743811), weight: 5 },

    { location: new google.maps.LatLng(40.84745600, -96.46741931), weight: 5 },

    { location: new google.maps.LatLng(40.84743196, -96.46740051), weight: 5 },

    { location: new google.maps.LatLng(40.84740792, -96.46738171), weight: 3 },

    { location: new google.maps.LatLng(40.84738388, -96.46736291), weight: 1 },

    { location: new google.maps.LatLng(40.84735984, -96.46734411), weight: 8 },

    { location: new google.maps.LatLng(40.84733579, -96.46732531), weight: 1 },

    { location: new google.maps.LatLng(40.84731175, -96.46730652), weight: 2 },

    { location: new google.maps.LatLng(40.84728771, -96.46728772), weight: 7 },

    { location: new google.maps.LatLng(40.84726367, -96.46726892), weight: 1 },

    { location: new google.maps.LatLng(40.84723962, -96.46725012), weight: 2 },

    { location: new google.maps.LatLng(40.84721558, -96.46723132), weight: 5 },


    { location: new google.maps.LatLng(40.84722792, -96.46720986), weight: 8 },

    { location: new google.maps.LatLng(40.84725186, -96.46722873), weight: 3 },

    { location: new google.maps.LatLng(40.84727581, -96.46724760), weight: 9 },

    { location: new google.maps.LatLng(40.84729976, -96.46726647), weight: 8 },

    { location: new google.maps.LatLng(40.84732370, -96.46728534), weight: 8 },

    { location: new google.maps.LatLng(40.84734765, -96.46730421), weight: 8 },

    { location: new google.maps.LatLng(40.84737160, -96.46732308), weight: 2 },

    { location: new google.maps.LatLng(40.84739554, -96.46734195), weight: 4 },

    { location: new google.maps.LatLng(40.84741949, -96.46736082), weight: 7 },

    { location: new google.maps.LatLng(40.84744344, -96.46737969), weight: 1 },

    { location: new google.maps.LatLng(40.84746738, -96.46739856), weight: 5 },

    { location: new google.maps.LatLng(40.84749133, -96.46741743), weight: 2 },

    { location: new google.maps.LatLng(40.84751528, -96.46743630), weight: 5 },

    { location: new google.maps.LatLng(40.84753922, -96.46745517), weight: 8 },

    { location: new google.maps.LatLng(40.84756317, -96.46747404), weight: 9 },

    { location: new google.maps.LatLng(40.84758712, -96.46749291), weight: 9 },

    { location: new google.maps.LatLng(40.84761106, -96.46751178), weight: 8 },

    { location: new google.maps.LatLng(40.84763501, -96.46753065), weight: 8 },

    { location: new google.maps.LatLng(40.84765896, -96.46754952), weight: 2 },

    { location: new google.maps.LatLng(40.84768290, -96.46756839), weight: 1 },

    { location: new google.maps.LatLng(40.84770685, -96.46758726), weight: 1 },

    { location: new google.maps.LatLng(40.84773079, -96.46760612), weight: 6 },

    { location: new google.maps.LatLng(40.84775474, -96.46762499), weight: 4 },

    { location: new google.maps.LatLng(40.84777869, -96.46764386), weight: 7 },

    { location: new google.maps.LatLng(40.84780263, -96.46766273), weight: 9 },

    { location: new google.maps.LatLng(40.84782658, -96.46768160), weight: 4 },

    { location: new google.maps.LatLng(40.84785053, -96.46770047), weight: 2 },

    { location: new google.maps.LatLng(40.84787447, -96.46771934), weight: 2 },

    { location: new google.maps.LatLng(40.84789842, -96.46773821), weight: 2 },

    { location: new google.maps.LatLng(40.84792237, -96.46775708), weight: 5 },

    { location: new google.maps.LatLng(40.84794631, -96.46777595), weight: 4 },

    { location: new google.maps.LatLng(40.84797026, -96.46779482), weight: 2 },

    { location: new google.maps.LatLng(40.84799421, -96.46781369), weight: 1 },

    { location: new google.maps.LatLng(40.84801815, -96.46783256), weight: 9 },

    { location: new google.maps.LatLng(40.84804210, -96.46785143), weight: 8 },

    { location: new google.maps.LatLng(40.84806605, -96.46787030), weight: 1 },

    { location: new google.maps.LatLng(40.84808999, -96.46788917), weight: 4 },

    { location: new google.maps.LatLng(40.84811394, -96.46790804), weight: 5 },

    { location: new google.maps.LatLng(40.84813789, -96.46792691), weight: 1 },

    { location: new google.maps.LatLng(40.84816183, -96.46794578), weight: 4 },

    { location: new google.maps.LatLng(40.84818578, -96.46796465), weight: 1 },






    { location: new google.maps.LatLng(40.84819235, -96.46793515), weight: 3 },
    { location: new google.maps.LatLng(40.84816852, -96.46791632), weight: 8 },
    { location: new google.maps.LatLng(40.84814468, -96.46789750), weight: 5 },
    { location: new google.maps.LatLng(40.84812084, -96.46787867), weight: 6 },
    { location: new google.maps.LatLng(40.84809700, -96.46785985), weight: 6 },
    { location: new google.maps.LatLng(40.84807317, -96.46784102), weight: 4 },
    { location: new google.maps.LatLng(40.84804933, -96.46782220), weight: 9 },
    { location: new google.maps.LatLng(40.84802549, -96.46780337), weight: 4 },
    { location: new google.maps.LatLng(40.84800165, -96.46778455), weight: 8 },
    { location: new google.maps.LatLng(40.84797782, -96.46776572), weight: 5 },

    { location: new google.maps.LatLng(40.84795398, -96.46774690), weight: 2 },

    { location: new google.maps.LatLng(40.84793014, -96.46772807), weight: 3 },

    { location: new google.maps.LatLng(40.84790631, -96.46770925), weight: 5 },

    { location: new google.maps.LatLng(40.84788247, -96.46769042), weight: 1 },

    { location: new google.maps.LatLng(40.84785863, -96.46767160), weight: 5 },

    { location: new google.maps.LatLng(40.84783479, -96.46765277), weight: 2 },

    { location: new google.maps.LatLng(40.84781096, -96.46763395), weight: 6 },

    { location: new google.maps.LatLng(40.84778712, -96.46761512), weight: 2 },

    { location: new google.maps.LatLng(40.84776328, -96.46759629), weight: 1 },

    { location: new google.maps.LatLng(40.84773944, -96.46757747), weight: 1 },

    { location: new google.maps.LatLng(40.84771561, -96.46755864), weight: 9 },

    { location: new google.maps.LatLng(40.84769177, -96.46753982), weight: 8 },

    { location: new google.maps.LatLng(40.84766793, -96.46752099), weight: 2 },

    { location: new google.maps.LatLng(40.84764410, -96.46750217), weight: 7 },

    { location: new google.maps.LatLng(40.84762026, -96.46748334), weight: 2 },

    { location: new google.maps.LatLng(40.84759642, -96.46746452), weight: 3 },

    { location: new google.maps.LatLng(40.84757258, -96.46744569), weight: 5 },

    { location: new google.maps.LatLng(40.84754875, -96.46742687), weight: 4 },

    { location: new google.maps.LatLng(40.84752491, -96.46740804), weight: 8 },

    { location: new google.maps.LatLng(40.84750107, -96.46738922), weight: 8 },

    { location: new google.maps.LatLng(40.84747723, -96.46737039), weight: 6 },

    { location: new google.maps.LatLng(40.84745340, -96.46735157), weight: 7 },

    { location: new google.maps.LatLng(40.84742956, -96.46733274), weight: 7 },

    { location: new google.maps.LatLng(40.84740572, -96.46731392), weight: 6 },

    { location: new google.maps.LatLng(40.84738189, -96.46729509), weight: 1 },

    { location: new google.maps.LatLng(40.84735805, -96.46727627), weight: 1 },

    { location: new google.maps.LatLng(40.84733421, -96.46725744), weight: 1 },

    { location: new google.maps.LatLng(40.84731037, -96.46723862), weight: 9 },

    { location: new google.maps.LatLng(40.84728654, -96.46721979), weight: 4 },

    { location: new google.maps.LatLng(40.84726270, -96.46720097), weight: 8 },

    { location: new google.maps.LatLng(40.84723886, -96.46718214), weight: 5 },


  ];


}
function getPoints() {
  return [





    new google.maps.LatLng(40.84817727, -96.46798329),
    new google.maps.LatLng(40.84815323, -96.46796449),
    //new google.maps.LatLng(40.84812918,-96.46794569),
    new google.maps.LatLng(40.84810514, -96.46792689),
    //new google.maps.LatLng(40.84808110,-96.46790809),
    //new google.maps.LatLng(40.84805706,-96.46788929),
    new google.maps.LatLng(40.84803302, -96.46787049),
    new google.maps.LatLng(40.84800897, -96.46785169),
    new google.maps.LatLng(40.84798493, -96.46783290),
    new google.maps.LatLng(40.84796089, -96.46781410),
    new google.maps.LatLng(40.84793685, -96.46779530),
    new google.maps.LatLng(40.84791281, -96.46777650),
    new google.maps.LatLng(40.84788876, -96.46775770),
    // new google.maps.LatLng(40.84786472,-96.46773890),
    new google.maps.LatLng(40.84784068, -96.46772010),
    // new google.maps.LatLng(40.84781664,-96.46770130),
    // new google.maps.LatLng(40.84779259,-96.46768250),
    // new google.maps.LatLng(40.84776855,-96.46766370),
    new google.maps.LatLng(40.84774451, -96.46764490),
    new google.maps.LatLng(40.84772047, -96.46762610),
    new google.maps.LatLng(40.84769643, -96.46760730),
    new google.maps.LatLng(40.84767238, -96.46758850),
    new google.maps.LatLng(40.84764834, -96.46756971),
    // new google.maps.LatLng(40.84762430,-96.46755091),
    new google.maps.LatLng(40.84760026, -96.46753211),
    new google.maps.LatLng(40.84757622, -96.46751331),
    new google.maps.LatLng(40.84755217, -96.46749451),
    // new google.maps.LatLng(40.84752813,-96.46747571),
    // new google.maps.LatLng(40.84750409,-96.46745691),
    // new google.maps.LatLng(40.84748005,-96.46743811),
    new google.maps.LatLng(40.84745600, -96.46741931),
    new google.maps.LatLng(40.84743196, -96.46740051),
    new google.maps.LatLng(40.84740792, -96.46738171),
    new google.maps.LatLng(40.84738388, -96.46736291),
    new google.maps.LatLng(40.84735984, -96.46734411),
    new google.maps.LatLng(40.84733579, -96.46732531),
    // new google.maps.LatLng(40.84731175,-96.46730652),
    // new google.maps.LatLng(40.84728771,-96.46728772),
    new google.maps.LatLng(40.84726367, -96.46726892),
    // new google.maps.LatLng(40.84723962,-96.46725012),
    new google.maps.LatLng(40.84721558, -96.46723132),




    new google.maps.LatLng(40.84722792, -96.46720986),
    new google.maps.LatLng(40.84725186, -96.46722873),
    // new google.maps.LatLng(40.84727581,-96.46724760),
    new google.maps.LatLng(40.84729976, -96.46726647),
    new google.maps.LatLng(40.84732370, -96.46728534),
    // new google.maps.LatLng(40.84734765,-96.46730421),
    // new google.maps.LatLng(40.84737160,-96.46732308),
    new google.maps.LatLng(40.84739554, -96.46734195),
    new google.maps.LatLng(40.84741949, -96.46736082),
    new google.maps.LatLng(40.84744344, -96.46737969),
    // new google.maps.LatLng(40.84746738,-96.46739856),
    new google.maps.LatLng(40.84749133, -96.46741743),
    new google.maps.LatLng(40.84751528, -96.46743630),
    // new google.maps.LatLng(40.84753922,-96.46745517),
    // new google.maps.LatLng(40.84756317,-96.46747404),
    // new google.maps.LatLng(40.84758712,-96.46749291),
    new google.maps.LatLng(40.84761106, -96.46751178),
    // new google.maps.LatLng(40.84763501,-96.46753065),
    // new google.maps.LatLng(40.84765896,-96.46754952),
    new google.maps.LatLng(40.84768290, -96.46756839),
    new google.maps.LatLng(40.84770685, -96.46758726),
    new google.maps.LatLng(40.84773079, -96.46760612),
    new google.maps.LatLng(40.84775474, -96.46762499),
    // new google.maps.LatLng(40.84777869,-96.46764386),
    new google.maps.LatLng(40.84780263, -96.46766273),
    new google.maps.LatLng(40.84782658, -96.46768160),
    new google.maps.LatLng(40.84785053, -96.46770047),
    // new google.maps.LatLng(40.84787447,-96.46771934),
    // new google.maps.LatLng(40.84789842,-96.46773821),
    // new google.maps.LatLng(40.84792237,-96.46775708),
    // new google.maps.LatLng(40.84794631,-96.46777595),
    new google.maps.LatLng(40.84797026, -96.46779482),
    // new google.maps.LatLng(40.84799421,-96.46781369),
    // new google.maps.LatLng(40.84801815,-96.46783256),
    new google.maps.LatLng(40.84804210, -96.46785143),
    new google.maps.LatLng(40.84806605, -96.46787030),
    new google.maps.LatLng(40.84808999, -96.46788917),
    // new google.maps.LatLng(40.84811394,-96.46790804),
    new google.maps.LatLng(40.84813789, -96.46792691),
    new google.maps.LatLng(40.84816183, -96.46794578),
    new google.maps.LatLng(40.84818578, -96.46796465),




    new google.maps.LatLng(40.84819235, -96.46793515),
    new google.maps.LatLng(40.84816852, -96.46791632),
    // new google.maps.LatLng(40.84814468,-96.46789750),
    new google.maps.LatLng(40.84812084, -96.46787867),
    new google.maps.LatLng(40.84809700, -96.46785985),
    // new google.maps.LatLng(40.84807317,-96.46784102),
    // new google.maps.LatLng(40.84804933,-96.46782220),
    // new google.maps.LatLng(40.84802549,-96.46780337),
    new google.maps.LatLng(40.84800165, -96.46778455),
    new google.maps.LatLng(40.84797782, -96.46776572),
    new google.maps.LatLng(40.84795398, -96.46774690),
    // new google.maps.LatLng(40.84793014,-96.46772807),
    new google.maps.LatLng(40.84790631, -96.46770925),
    new google.maps.LatLng(40.84788247, -96.46769042),
    new google.maps.LatLng(40.84785863, -96.46767160),
    // new google.maps.LatLng(40.84783479,-96.46765277),
    new google.maps.LatLng(40.84781096, -96.46763395),
    new google.maps.LatLng(40.84778712, -96.46761512),
    new google.maps.LatLng(40.84776328, -96.46759629),
    new google.maps.LatLng(40.84773944, -96.46757747),
    // new google.maps.LatLng(40.84771561,-96.46755864),
    // new google.maps.LatLng(40.84769177,-96.46753982),
    // new google.maps.LatLng(40.84766793,-96.46752099),
    new google.maps.LatLng(40.84764410, -96.46750217),
    // new google.maps.LatLng(40.84762026,-96.46748334),
    new google.maps.LatLng(40.84759642, -96.46746452),
    new google.maps.LatLng(40.84757258, -96.46744569),
    new google.maps.LatLng(40.84754875, -96.46742687),
    // new google.maps.LatLng(40.84752491,-96.46740804),
    new google.maps.LatLng(40.84750107, -96.46738922),
    new google.maps.LatLng(40.84747723, -96.46737039),
    new google.maps.LatLng(40.84745340, -96.46735157),
    // new google.maps.LatLng(40.84742956,-96.46733274),
    new google.maps.LatLng(40.84740572, -96.46731392),
    new google.maps.LatLng(40.84738189, -96.46729509),
    // new google.maps.LatLng(40.84735805,-96.46727627),
    // new google.maps.LatLng(40.84733421,-96.46725744),
    new google.maps.LatLng(40.84731037, -96.46723862),
    new google.maps.LatLng(40.84728654, -96.46721979),
    new google.maps.LatLng(40.84726270, -96.46720097),
    new google.maps.LatLng(40.84723886, -96.46718214),


    new google.maps.LatLng(40.84725542, -96.46714728),
    new google.maps.LatLng(40.84727926, -96.46716597),
    new google.maps.LatLng(40.84730310, -96.46718466),
    new google.maps.LatLng(40.84732694, -96.46720335),
    // new google.maps.LatLng(40.84735078,-96.46722204),
    // new google.maps.LatLng(40.84737462,-96.46724073),
    new google.maps.LatLng(40.84739847, -96.46725942),
    // new google.maps.LatLng(40.84742231,-96.46727811),
    new google.maps.LatLng(40.84744615, -96.46729680),
    new google.maps.LatLng(40.84746999, -96.46731549),
    // new google.maps.LatLng(40.84749383,-96.46733418),
    new google.maps.LatLng(40.84751767, -96.46735287),
    new google.maps.LatLng(40.84754152, -96.46737156),
    // new google.maps.LatLng(40.84756536,-96.46739025),
    // new google.maps.LatLng(40.84758920,-96.46740894),
    new google.maps.LatLng(40.84761304, -96.46742763),
    // new google.maps.LatLng(40.84763688,-96.46744632),
    // new google.maps.LatLng(40.84766072,-96.46746501),
    new google.maps.LatLng(40.84768457, -96.46748370),
    new google.maps.LatLng(40.84770841, -96.46750239),
    new google.maps.LatLng(40.84773225, -96.46752108),
    // new google.maps.LatLng(40.84775609,-96.46753977),
    new google.maps.LatLng(40.84777993, -96.46755846),
    new google.maps.LatLng(40.84780377, -96.46757715),
    new google.maps.LatLng(40.84782761, -96.46759584),
    // new google.maps.LatLng(40.84785146,-96.46761453),
    // new google.maps.LatLng(40.84787530,-96.46763322),
    new google.maps.LatLng(40.84789914, -96.46765191),
    new google.maps.LatLng(40.84792298, -96.46767060),
    // new google.maps.LatLng(40.84794682,-96.46768929),
    new google.maps.LatLng(40.84797066, -96.46770798),
    new google.maps.LatLng(40.84799451, -96.46772667),
    // new google.maps.LatLng(40.84801835,-96.46774536),
    new google.maps.LatLng(40.84804219, -96.46776405),
    new google.maps.LatLng(40.84806603, -96.46778274),
    new google.maps.LatLng(40.84808987, -96.46780143),
    // new google.maps.LatLng(40.84811371,-96.46782012),
    new google.maps.LatLng(40.84813756, -96.46783881),
    new google.maps.LatLng(40.84816140, -96.46785750),
    // new google.maps.LatLng(40.84818524,-96.46787619),
    new google.maps.LatLng(40.84820908, -96.46789488),


    /*
    stage
    new google.maps.LatLng(40.84816313,-96.46799177),
new google.maps.LatLng(40.84811560,-96.46795415),
new google.maps.LatLng(40.84806806,-96.46791653),
//new google.maps.LatLng(40.84802052,-96.46787890),
new google.maps.LatLng(40.84797299,-96.46784128),
new google.maps.LatLng(40.84792545,-96.46780365),
new google.maps.LatLng(40.84787791,-96.46776603),
new google.maps.LatLng(40.84783037,-96.46772841),
new google.maps.LatLng(40.84778284,-96.46769078),
new google.maps.LatLng(40.84773530,-96.46765316),
new google.maps.LatLng(40.84768776,-96.46761553),
new google.maps.LatLng(40.84764023,-96.46757791),
new google.maps.LatLng(40.84759269,-96.46754028),
new google.maps.LatLng(40.84754515,-96.46750266),
new google.maps.LatLng(40.84749762,-96.46746504),
//new google.maps.LatLng(40.84745008,-96.46742741),
new google.maps.LatLng(40.84740254,-96.46738979),
new google.maps.LatLng(40.84735500,-96.46735216),
new google.maps.LatLng(40.84730747,-96.46731454),
new google.maps.LatLng(40.84725993,-96.46727691),
new google.maps.LatLng(40.84721239,-96.46723929),
 
 
new google.maps.LatLng(40.84817888,-96.46794802),
//new google.maps.LatLng(40.84813108,-96.46791082),
new google.maps.LatLng(40.84808329,-96.46787362),
new google.maps.LatLng(40.84803549,-96.46783643),
new google.maps.LatLng(40.84798770,-96.46779923),
new google.maps.LatLng(40.84793990,-96.46776204),
new google.maps.LatLng(40.84789210,-96.46772484),
new google.maps.LatLng(40.84784431,-96.46768764),
new google.maps.LatLng(40.84779651,-96.46765045),
new google.maps.LatLng(40.84774872,-96.46761325),
new google.maps.LatLng(40.84770092,-96.46757605),
new google.maps.LatLng(40.84765312,-96.46753886),
new google.maps.LatLng(40.84760533,-96.46750166),
new google.maps.LatLng(40.84755753,-96.46746446),
new google.maps.LatLng(40.84750974,-96.46742727),
new google.maps.LatLng(40.84746194,-96.46739007),
new google.maps.LatLng(40.84741415,-96.46735288),
//new google.maps.LatLng(40.84736635,-96.46731568),
new google.maps.LatLng(40.84731855,-96.46727848),
new google.maps.LatLng(40.84727076,-96.46724129),
new google.maps.LatLng(40.84722296,-96.46720409),
 
 
new google.maps.LatLng(40.84818766,-96.46791803),
new google.maps.LatLng(40.84814021,-96.46788090),
new google.maps.LatLng(40.84809276,-96.46784377),
new google.maps.LatLng(40.84804530,-96.46780663),
new google.maps.LatLng(40.84799785,-96.46776950),
new google.maps.LatLng(40.84795040,-96.46773237),
new google.maps.LatLng(40.84790295,-96.46769524),
new google.maps.LatLng(40.84785550,-96.46765810),
new google.maps.LatLng(40.84780804,-96.46762097),
new google.maps.LatLng(40.84776059,-96.46758384),
new google.maps.LatLng(40.84771314,-96.46754670),
new google.maps.LatLng(40.84766569,-96.46750957),
new google.maps.LatLng(40.84761824,-96.46747244),
new google.maps.LatLng(40.84757078,-96.46743531),
new google.maps.LatLng(40.84752333,-96.46739817),
new google.maps.LatLng(40.84747588,-96.46736104),
new google.maps.LatLng(40.84742843,-96.46732391),
new google.maps.LatLng(40.84738097,-96.46728678),
new google.maps.LatLng(40.84733352,-96.46724964),
new google.maps.LatLng(40.84728607,-96.46721251),
new google.maps.LatLng(40.84723862,-96.46717538),
 
 
new google.maps.LatLng(40.84726499,-96.46712978),
new google.maps.LatLng(40.84731222,-96.46716621),
//new google.maps.LatLng(40.84735945,-96.46720264),
new google.maps.LatLng(40.84740668,-96.46723907),
new google.maps.LatLng(40.84745391,-96.46727549),
new google.maps.LatLng(40.84750114,-96.46731192),
new google.maps.LatLng(40.84754837,-96.46734835),
new google.maps.LatLng(40.84759560,-96.46738478),
new google.maps.LatLng(40.84764283,-96.46742121),
new google.maps.LatLng(40.84769006,-96.46745764),
new google.maps.LatLng(40.84773729,-96.46749407),
//new google.maps.LatLng(40.84778452,-96.46753049),
new google.maps.LatLng(40.84783175,-96.46756692),
new google.maps.LatLng(40.84787898,-96.46760335),
new google.maps.LatLng(40.84792621,-96.46763978),
new google.maps.LatLng(40.84797344,-96.46767621),
new google.maps.LatLng(40.84802066,-96.46771264),
//new google.maps.LatLng(40.84806789,-96.46774907),
new google.maps.LatLng(40.84811512,-96.46778550),
new google.maps.LatLng(40.84816235,-96.46782192),
new google.maps.LatLng(40.84820958,-96.46785835),
    

new google.maps.LatLng(40.84827622,-96.46767701),

new google.maps.LatLng(40.84825268,-96.46765917),

new google.maps.LatLng(40.84822914,-96.46764134),

new google.maps.LatLng(40.84820561,-96.46762350),

new google.maps.LatLng(40.84818207,-96.46760566),

new google.maps.LatLng(40.84815854,-96.46758783),

new google.maps.LatLng(40.84813500,-96.46756999),

new google.maps.LatLng(40.84811146,-96.46755215),

new google.maps.LatLng(40.84808793,-96.46753432),

new google.maps.LatLng(40.84806439,-96.46751648),

new google.maps.LatLng(40.84804086,-96.46749864),

new google.maps.LatLng(40.84801732,-96.46748081),

new google.maps.LatLng(40.84799378,-96.46746297),

new google.maps.LatLng(40.84797025,-96.46744513),

new google.maps.LatLng(40.84794671,-96.46742730),

new google.maps.LatLng(40.84792318,-96.46740946),

new google.maps.LatLng(40.84789964,-96.46739162),

new google.maps.LatLng(40.84787611,-96.46737379),

new google.maps.LatLng(40.84785257,-96.46735595),

new google.maps.LatLng(40.84782903,-96.46733811),

new google.maps.LatLng(40.84780550,-96.46732028),

new google.maps.LatLng(40.84778196,-96.46730244),

new google.maps.LatLng(40.84775843,-96.46728460),

new google.maps.LatLng(40.84773489,-96.46726677),

new google.maps.LatLng(40.84771135,-96.46724893),

new google.maps.LatLng(40.84768782,-96.46723109),

new google.maps.LatLng(40.84766428,-96.46721326),

new google.maps.LatLng(40.84764075,-96.46719542),

new google.maps.LatLng(40.84761721,-96.46717758),

new google.maps.LatLng(40.84759367,-96.46715975),

new google.maps.LatLng(40.84757014,-96.46714191),

new google.maps.LatLng(40.84754660,-96.46712407),

new google.maps.LatLng(40.84752307,-96.46710624),

new google.maps.LatLng(40.84749953,-96.46708840),

new google.maps.LatLng(40.84747600,-96.46707056),

new google.maps.LatLng(40.84745246,-96.46705273),

new google.maps.LatLng(40.84742892,-96.46703489),

new google.maps.LatLng(40.84740539,-96.46701705),

new google.maps.LatLng(40.84738185,-96.46699922),

new google.maps.LatLng(40.84735832,-96.46698138),

new google.maps.LatLng(40.84733478,-96.46696354),





new google.maps.LatLng(40.84829396,-96.46763801),
new google.maps.LatLng(40.84827108,-96.46761910),
new google.maps.LatLng(40.84824820,-96.46760019),
new google.maps.LatLng(40.84822533,-96.46758128),
new google.maps.LatLng(40.84820245,-96.46756237),
new google.maps.LatLng(40.84817957,-96.46754346),
new google.maps.LatLng(40.84815670,-96.46752455),
new google.maps.LatLng(40.84813382,-96.46750564),
new google.maps.LatLng(40.84811094,-96.46748673),
new google.maps.LatLng(40.84808807,-96.46746782),
new google.maps.LatLng(40.84806519,-96.46744891),
new google.maps.LatLng(40.84804232,-96.46743000),
new google.maps.LatLng(40.84801944,-96.46741109),
new google.maps.LatLng(40.84799656,-96.46739218),
new google.maps.LatLng(40.84797369,-96.46737327),
new google.maps.LatLng(40.84795081,-96.46735436),
new google.maps.LatLng(40.84792793,-96.46733545),
new google.maps.LatLng(40.84790506,-96.46731654),
new google.maps.LatLng(40.84788218,-96.46729763),
new google.maps.LatLng(40.84785930,-96.46727872),
new google.maps.LatLng(40.84783643,-96.46725981),
new google.maps.LatLng(40.84781355,-96.46724090),
new google.maps.LatLng(40.84779067,-96.46722199),
new google.maps.LatLng(40.84776780,-96.46720308),
new google.maps.LatLng(40.84774492,-96.46718418),
new google.maps.LatLng(40.84772204,-96.46716527),
new google.maps.LatLng(40.84769917,-96.46714636),
new google.maps.LatLng(40.84767629,-96.46712745),
new google.maps.LatLng(40.84765342,-96.46710854),
new google.maps.LatLng(40.84763054,-96.46708963),
new google.maps.LatLng(40.84760766,-96.46707072),
new google.maps.LatLng(40.84758479,-96.46705181),
new google.maps.LatLng(40.84756191,-96.46703290),
new google.maps.LatLng(40.84753903,-96.46701399),
new google.maps.LatLng(40.84751616,-96.46699508),
new google.maps.LatLng(40.84749328,-96.46697617),
new google.maps.LatLng(40.84747040,-96.46695726),
new google.maps.LatLng(40.84744753,-96.46693835),
new google.maps.LatLng(40.84742465,-96.46691944),
new google.maps.LatLng(40.84740177,-96.46690053),
new google.maps.LatLng(40.84737890,-96.46688162)

stage

*/


    /*
     new google.maps.LatLng(40.84808196,-96.46794366),
     new google.maps.LatLng(40.84812822,-96.46783477),
     
     new google.maps.LatLng(40.84817448,-96.46772587),
     
     new google.maps.LatLng(40.84822074,-96.46761697),
     
     new google.maps.LatLng(40.84826700,-96.46750807),
     
     new google.maps.LatLng(40.84831326,-96.46739917),
     
     new google.maps.LatLng(40.84835952,-96.46729028),
     
     new google.maps.LatLng(40.84840578,-96.46718138),
     
     new google.maps.LatLng(40.84845204,-96.46707248),
     
     new google.maps.LatLng(40.84849830,-96.46696358),
     
     new google.maps.LatLng(40.84854456,-96.46685469),



     new google.maps.LatLng(40.84805355,-96.46863031),
new google.maps.LatLng(40.84785999,-96.46851873),
new google.maps.LatLng(40.84766642,-96.46840715),
new google.maps.LatLng(40.84747286,-96.46829557),
new google.maps.LatLng(40.84727929,-96.46818399),
new google.maps.LatLng(40.84708573,-96.46807241),
new google.maps.LatLng(40.84689216,-96.46796083),
new google.maps.LatLng(40.84669860,-96.46784925),
new google.maps.LatLng(40.84650504,-96.46773767),
new google.maps.LatLng(40.84631147,-96.46762609),
new google.maps.LatLng(40.84611791,-96.46751451),
new google.maps.LatLng(40.84816313,-96.46799177),
new google.maps.LatLng(40.84806806,-96.46791653),
new google.maps.LatLng(40.84797299,-96.46784128),
new google.maps.LatLng(40.84787791,-96.46776603),
new google.maps.LatLng(40.84778284,-96.46769078),
new google.maps.LatLng(40.84768776,-96.46761553),
new google.maps.LatLng(40.84759269,-96.46754028),
new google.maps.LatLng(40.84749762,-96.46746504),
new google.maps.LatLng(40.84740254,-96.46738979),
new google.maps.LatLng(40.84730747,-96.46731454),
new google.maps.LatLng(40.84721239,-96.46723929),







 /*
new google.maps.LatLng(40.8482,-96.468	),
new google.maps.LatLng(40.8482,-96.4679	),
new google.maps.LatLng(40.8483,-96.4678	),
new google.maps.LatLng(40.8483,-96.4677	),
new google.maps.LatLng(40.8484,-96.4676	),
new google.maps.LatLng(40.8484,-96.4675	),
new google.maps.LatLng(40.8484,-96.4673	),
new google.maps.LatLng(40.8485,-96.4672	),
new google.maps.LatLng(40.8485,-96.4671	),
new google.maps.LatLng(40.8486,-96.467	),
new google.maps.LatLng(40.8486,-96.4669	),

 
     { lat: 40.847933, lng: -96.469118 },
 { lat: 40.847984, lng: -96.469029 },
 { lat: 40.848014, lng: -96.468960 },
 { lat: 40.848046, lng: -96.468857 },
 { lat: 40.848075, lng: -96.468756 },
 { lat: 40.848111, lng: -96.468621 },
 { lat: 40.848145, lng: -96.468468 },
 { lat: 40.848180, lng: -96.468328 },
 { lat: 40.848101, lng: -96.468241 },
 { lat: 40.848012, lng: -96.468152 },
 { lat: 40.847971, lng: -96.468118 },
 { lat: 40.847897, lng: -96.468042 },
 { lat: 40.847767, lng: -96.467928 },
 { lat: 40.847641, lng: -96.467827 },
 { lat: 40.847517, lng: -96.467742 },
 { lat: 40.847441, lng: -96.467681 },
 { lat: 40.847305, lng: -96.467607 },
 { lat: 40.847070, lng: -96.467485 },
 { lat: 40.846799, lng: -96.467371 },
 { lat: 40.846439, lng: -96.467277 },
 { lat: 40.846129, lng: -96.467218 },
 { lat: 40.846062, lng: -96.468025 },
 { lat: 40.846243, lng: -96.468057 },
 { lat: 40.846468, lng: -96.468110 },
 { lat: 40.846723, lng: -96.468199 },
 { lat: 40.846972, lng: -96.468315 },
 { lat: 40.847189, lng: -96.468442 },
 { lat: 40.847518, lng: -96.468687 },
 { lat: 40.847769, lng: -96.468941 },
 
     
   new google.maps.LatLng(37.782551, -122.445368),
   new google.maps.LatLng(37.782745, -122.444586),
   new google.maps.LatLng(37.782842, -122.443688),
   new google.maps.LatLng(37.782919, -122.442815),
   new google.maps.LatLng(37.782992, -122.442112),
   new google.maps.LatLng(37.7831, -122.441461),
   new google.maps.LatLng(37.783206, -122.440829),
   new google.maps.LatLng(37.783273, -122.440324),
   new google.maps.LatLng(37.783316, -122.440023),
   new google.maps.LatLng(37.783357, -122.439794),
   new google.maps.LatLng(37.783371, -122.439687),
   new google.maps.LatLng(37.783368, -122.439666),
   new google.maps.LatLng(37.783383, -122.439594),
   new google.maps.LatLng(37.783508, -122.439525),
   new google.maps.LatLng(37.783842, -122.439591),
   new google.maps.LatLng(37.784147, -122.439668),
   new google.maps.LatLng(37.784206, -122.439686),
   new google.maps.LatLng(37.784386, -122.43979),
   new google.maps.LatLng(37.784701, -122.439902),
   new google.maps.LatLng(37.784965, -122.439938),
   new google.maps.LatLng(37.78501, -122.439947),
   new google.maps.LatLng(37.78536, -122.439952),
   new google.maps.LatLng(37.785715, -122.44003),
   new google.maps.LatLng(37.786117, -122.440119),
   new google.maps.LatLng(37.786564, -122.440209),
   new google.maps.LatLng(37.786905, -122.44027),
   new google.maps.LatLng(37.786956, -122.440279),
   new google.maps.LatLng(37.800224, -122.43352),
   new google.maps.LatLng(37.800155, -122.434101),
   new google.maps.LatLng(37.80016, -122.43443),
   new google.maps.LatLng(37.800378, -122.434527),
   new google.maps.LatLng(37.800738, -122.434598),
   new google.maps.LatLng(37.800938, -122.43465),
   new google.maps.LatLng(37.801024, -122.434889),
   new google.maps.LatLng(37.800955, -122.435392),
   new google.maps.LatLng(37.800886, -122.435959),
   new google.maps.LatLng(37.800811, -122.436275),
   new google.maps.LatLng(37.800788, -122.436299),
   new google.maps.LatLng(37.800719, -122.436302),
   new google.maps.LatLng(37.800702, -122.436298),
   new google.maps.LatLng(37.800661, -122.436273),
   new google.maps.LatLng(37.800395, -122.436172),
   new google.maps.LatLng(37.800228, -122.436116),
   new google.maps.LatLng(37.800169, -122.43613),
   new google.maps.LatLng(37.800066, -122.436167),
   new google.maps.LatLng(37.784345, -122.422922),
   new google.maps.LatLng(37.784389, -122.422926),
   new google.maps.LatLng(37.784437, -122.422924),
   new google.maps.LatLng(37.784746, -122.422818),
   new google.maps.LatLng(37.785436, -122.422959),
   new google.maps.LatLng(37.78612, -122.423112),
   new google.maps.LatLng(37.786433, -122.423029),
   new google.maps.LatLng(37.786631, -122.421213),
   new google.maps.LatLng(37.78666, -122.421033),
   new google.maps.LatLng(37.786801, -122.420141),
   new google.maps.LatLng(37.786823, -122.420034),
   new google.maps.LatLng(37.786831, -122.419916),
   new google.maps.LatLng(37.787034, -122.418208),
   new google.maps.LatLng(37.787056, -122.418034),
   new google.maps.LatLng(37.787169, -122.417145),
   new google.maps.LatLng(37.787217, -122.416715),
   new google.maps.LatLng(37.786144, -122.416403),
   new google.maps.LatLng(37.785292, -122.416257),
   new google.maps.LatLng(37.780666, -122.390374),
   new google.maps.LatLng(37.780501, -122.391281),
   new google.maps.LatLng(37.780148, -122.392052),
   new google.maps.LatLng(37.780173, -122.391148),
   new google.maps.LatLng(37.780693, -122.390592),
   new google.maps.LatLng(37.781261, -122.391142),
   new google.maps.LatLng(37.781808, -122.39173),
   new google.maps.LatLng(37.78234, -122.392341),
   new google.maps.LatLng(37.782812, -122.393022),
   new google.maps.LatLng(37.7833, -122.393672),
   new google.maps.LatLng(37.783809, -122.394275),
   new google.maps.LatLng(37.784246, -122.394979),
   new google.maps.LatLng(37.784791, -122.395958),
   new google.maps.LatLng(37.785675, -122.396746),
   new google.maps.LatLng(37.786262, -122.39578),
   new google.maps.LatLng(37.786776, -122.395093),
   new google.maps.LatLng(37.787282, -122.394426),
   new google.maps.LatLng(37.787783, -122.393767),
   new google.maps.LatLng(37.788343, -122.393184),
   new google.maps.LatLng(37.788895, -122.392506),
   new google.maps.LatLng(37.789371, -122.391701),
   new google.maps.LatLng(37.789722, -122.390952),
   new google.maps.LatLng(37.790315, -122.390305),
   new google.maps.LatLng(37.790738, -122.389616),
   new google.maps.LatLng(37.779448, -122.438702),
   new google.maps.LatLng(37.779023, -122.438585),
   new google.maps.LatLng(37.778542, -122.438492),
   new google.maps.LatLng(37.7781, -122.438411),
   new google.maps.LatLng(37.777986, -122.438376),
   new google.maps.LatLng(37.77768, -122.438313),
   new google.maps.LatLng(37.777316, -122.438273),
   new google.maps.LatLng(37.777135, -122.438254),
   new google.maps.LatLng(37.776987, -122.438303),
   new google.maps.LatLng(37.776946, -122.438404),
   new google.maps.LatLng(37.776944, -122.438467),
   new google.maps.LatLng(37.776892, -122.438459),
   new google.maps.LatLng(37.776842, -122.438442),
   new google.maps.LatLng(37.776822, -122.438391),
   new google.maps.LatLng(37.776814, -122.438412),
   new google.maps.LatLng(37.776787, -122.438628),
   new google.maps.LatLng(37.776729, -122.43865),
   new google.maps.LatLng(37.776759, -122.438677),
   new google.maps.LatLng(37.776772, -122.438498),
   new google.maps.LatLng(37.776787, -122.438389),
   new google.maps.LatLng(37.776848, -122.438283),
   new google.maps.LatLng(37.77687, -122.438239),
   new google.maps.LatLng(37.777015, -122.438198),
   new google.maps.LatLng(37.777333, -122.438256),
   new google.maps.LatLng(37.777595, -122.438308),
   new google.maps.LatLng(37.777797, -122.438344),
   new google.maps.LatLng(37.77816, -122.438442),
   new google.maps.LatLng(37.778414, -122.438508),
   new google.maps.LatLng(37.778445, -122.438516),
   new google.maps.LatLng(37.778503, -122.438529),
   new google.maps.LatLng(37.778607, -122.438549),
   new google.maps.LatLng(37.77867, -122.438644),
   new google.maps.LatLng(37.778847, -122.438706),
   new google.maps.LatLng(37.77924, -122.438744),
   new google.maps.LatLng(37.779738, -122.438822),
   new google.maps.LatLng(37.780201, -122.438882),
   new google.maps.LatLng(37.7804, -122.438905),
   new google.maps.LatLng(37.780501, -122.438921),
   new google.maps.LatLng(37.780892, -122.438986),
   new google.maps.LatLng(37.781446, -122.439087),
   new google.maps.LatLng(37.781985, -122.439199),
   new google.maps.LatLng(37.782239, -122.439249),
   new google.maps.LatLng(37.782286, -122.439266),
   new google.maps.LatLng(37.797847, -122.429388),
   new google.maps.LatLng(37.797874, -122.42918),
   new google.maps.LatLng(37.797885, -122.429069),
   new google.maps.LatLng(37.797887, -122.42905),
   new google.maps.LatLng(37.797933, -122.428954),
   new google.maps.LatLng(37.798242, -122.42899),
   new google.maps.LatLng(37.798617, -122.429075),
   new google.maps.LatLng(37.798719, -122.429092),
   new google.maps.LatLng(37.798944, -122.429145),
   new google.maps.LatLng(37.79932, -122.429251),
   new google.maps.LatLng(37.79959, -122.429309),
   new google.maps.LatLng(37.799677, -122.429324),
   new google.maps.LatLng(37.799966, -122.42936),
   new google.maps.LatLng(37.800288, -122.42943),
   new google.maps.LatLng(37.800443, -122.429461),
   new google.maps.LatLng(37.800465, -122.429474),
   new google.maps.LatLng(37.800644, -122.42954),
   new google.maps.LatLng(37.800948, -122.42962),
   new google.maps.LatLng(37.801242, -122.429685),
   new google.maps.LatLng(37.801375, -122.429702),
   new google.maps.LatLng(37.8014, -122.429703),
   new google.maps.LatLng(37.801453, -122.429707),
   new google.maps.LatLng(37.801473, -122.429709),
   new google.maps.LatLng(37.801532, -122.429707),
   new google.maps.LatLng(37.801852, -122.429729),
   new google.maps.LatLng(37.802173, -122.429789),
   new google.maps.LatLng(37.802459, -122.429847),
   new google.maps.LatLng(37.802554, -122.429825),
   new google.maps.LatLng(37.802647, -122.429549),
   new google.maps.LatLng(37.802693, -122.429179),
   new google.maps.LatLng(37.802729, -122.428751),
   new google.maps.LatLng(37.766104, -122.409291),
   new google.maps.LatLng(37.766103, -122.409268),
   new google.maps.LatLng(37.766138, -122.409229),
   new google.maps.LatLng(37.766183, -122.409231),
   new google.maps.LatLng(37.766153, -122.409276),
   new google.maps.LatLng(37.766005, -122.409365),
   new google.maps.LatLng(37.765897, -122.40957),
   new google.maps.LatLng(37.765767, -122.409739),
   new google.maps.LatLng(37.765693, -122.410389),
   new google.maps.LatLng(37.765615, -122.411201),
   new google.maps.LatLng(37.765533, -122.412121),
   new google.maps.LatLng(37.765467, -122.412939),
   new google.maps.LatLng(37.765444, -122.414821),
   new google.maps.LatLng(37.765444, -122.414964),
   new google.maps.LatLng(37.765318, -122.415424),
   new google.maps.LatLng(37.763961, -122.415296),
   new google.maps.LatLng(37.763115, -122.415196),
   new google.maps.LatLng(37.762967, -122.415183),
   new google.maps.LatLng(37.762278, -122.415127),
   new google.maps.LatLng(37.761675, -122.415055),
   new google.maps.LatLng(37.760932, -122.414988),
   new google.maps.LatLng(37.759337, -122.414862),
   new google.maps.LatLng(37.773187, -122.421922),
   new google.maps.LatLng(37.773043, -122.422118),
   new google.maps.LatLng(37.773007, -122.422165),
   new google.maps.LatLng(37.772979, -122.422219),
   new google.maps.LatLng(37.772865, -122.422394),
   new google.maps.LatLng(37.772779, -122.422503),
   new google.maps.LatLng(37.772676, -122.422701),
   new google.maps.LatLng(37.772606, -122.422806),
   new google.maps.LatLng(37.772566, -122.42284),
   new google.maps.LatLng(37.772508, -122.422852),
   new google.maps.LatLng(37.772387, -122.423011),
   new google.maps.LatLng(37.772099, -122.423328),
   new google.maps.LatLng(37.771704, -122.423783),
   new google.maps.LatLng(37.771481, -122.424081),
   new google.maps.LatLng(37.7714, -122.424179),
   new google.maps.LatLng(37.771352, -122.42422),
   new google.maps.LatLng(37.771248, -122.424327),
   new google.maps.LatLng(37.770904, -122.424781),
   new google.maps.LatLng(37.77052, -122.425283),
   new google.maps.LatLng(37.770337, -122.425553),
   new google.maps.LatLng(37.770128, -122.425832),
   new google.maps.LatLng(37.769756, -122.426331),
   new google.maps.LatLng(37.7693, -122.426902),
   new google.maps.LatLng(37.769132, -122.427065),
   new google.maps.LatLng(37.769092, -122.427103),
   new google.maps.LatLng(37.768979, -122.427172),
   new google.maps.LatLng(37.768595, -122.427634),
   new google.maps.LatLng(37.768372, -122.427913),
   new google.maps.LatLng(37.768337, -122.427961),
   new google.maps.LatLng(37.768244, -122.428138),
   new google.maps.LatLng(37.767942, -122.428581),
   new google.maps.LatLng(37.767482, -122.429094),
   new google.maps.LatLng(37.767031, -122.429606),
   new google.maps.LatLng(37.766732, -122.429986),
   new google.maps.LatLng(37.76668, -122.430058),
   new google.maps.LatLng(37.766633, -122.430109),
   new google.maps.LatLng(37.76658, -122.430211),
   new google.maps.LatLng(37.766367, -122.430594),
   new google.maps.LatLng(37.76591, -122.431137),
   new google.maps.LatLng(37.765353, -122.431806),
   new google.maps.LatLng(37.764962, -122.432298),
   new google.maps.LatLng(37.764868, -122.432486),
   new google.maps.LatLng(37.764518, -122.432913),
   new google.maps.LatLng(37.763435, -122.434173),
   new google.maps.LatLng(37.762847, -122.434953),
   new google.maps.LatLng(37.762291, -122.435935),
   new google.maps.LatLng(37.762224, -122.436074),
   new google.maps.LatLng(37.761957, -122.436892),
   new google.maps.LatLng(37.761652, -122.438886),
   new google.maps.LatLng(37.761284, -122.439955),
   new google.maps.LatLng(37.76121, -122.440068),
   new google.maps.LatLng(37.761064, -122.44072),
   new google.maps.LatLng(37.76104, -122.441411),
   new google.maps.LatLng(37.761048, -122.442324),
   new google.maps.LatLng(37.760851, -122.443118),
   new google.maps.LatLng(37.759977, -122.444591),
   new google.maps.LatLng(37.759913, -122.444698),
   new google.maps.LatLng(37.759623, -122.445065),
   new google.maps.LatLng(37.758902, -122.445158),
   new google.maps.LatLng(37.758428, -122.44457),
   new google.maps.LatLng(37.757687, -122.44334),
   new google.maps.LatLng(37.757583, -122.44324),
   new google.maps.LatLng(37.757019, -122.442787),
   new google.maps.LatLng(37.756603, -122.442322),
   new google.maps.LatLng(37.75638, -122.441602),
   new google.maps.LatLng(37.75579, -122.441382),
   new google.maps.LatLng(37.754493, -122.442133),
   new google.maps.LatLng(37.754361, -122.442206),
   new google.maps.LatLng(37.753719, -122.44265),
   new google.maps.LatLng(37.753096, -122.442915),
   new google.maps.LatLng(37.751617, -122.443211),
   new google.maps.LatLng(37.751496, -122.443246),
   new google.maps.LatLng(37.750733, -122.443428),
   new google.maps.LatLng(37.750126, -122.443536),
   new google.maps.LatLng(37.750103, -122.443784),
   new google.maps.LatLng(37.75039, -122.44401),
   new google.maps.LatLng(37.750448, -122.444013),
   new google.maps.LatLng(37.750536, -122.44404),
   new google.maps.LatLng(37.750493, -122.444141),
   new google.maps.LatLng(37.790859, -122.402808),
   new google.maps.LatLng(37.790864, -122.402768),
   new google.maps.LatLng(37.790995, -122.402539),
   new google.maps.LatLng(37.791148, -122.402172),
   new google.maps.LatLng(37.791385, -122.401312),
   new google.maps.LatLng(37.791405, -122.400776),
   new google.maps.LatLng(37.791288, -122.400528),
   new google.maps.LatLng(37.791113, -122.400441),
   new google.maps.LatLng(37.791027, -122.400395),
   new google.maps.LatLng(37.791094, -122.400311),
   new google.maps.LatLng(37.791211, -122.400183),
   new google.maps.LatLng(37.79106, -122.399334),
   new google.maps.LatLng(37.790538, -122.398718),
   new google.maps.LatLng(37.790095, -122.398086),
   new google.maps.LatLng(37.789644, -122.39736),
   new google.maps.LatLng(37.789254, -122.396844),
   new google.maps.LatLng(37.788855, -122.396397),
   new google.maps.LatLng(37.788483, -122.395963),
   new google.maps.LatLng(37.788015, -122.395365),
   new google.maps.LatLng(37.787558, -122.394735),
   new google.maps.LatLng(37.787472, -122.394323),
   new google.maps.LatLng(37.78763, -122.394025),
   new google.maps.LatLng(37.787767, -122.393987),
   new google.maps.LatLng(37.787486, -122.394452),
   new google.maps.LatLng(37.786977, -122.395043),
   new google.maps.LatLng(37.786583, -122.395552),
   new google.maps.LatLng(37.78654, -122.39561),
   new google.maps.LatLng(37.786516, -122.395659),
   new google.maps.LatLng(37.786378, -122.395707),
   new google.maps.LatLng(37.786044, -122.395362),
   new google.maps.LatLng(37.785598, -122.394715),
   new google.maps.LatLng(37.785321, -122.394361),
   new google.maps.LatLng(37.785207, -122.394236),
   new google.maps.LatLng(37.785751, -122.394062),
   new google.maps.LatLng(37.785996, -122.393881),
   new google.maps.LatLng(37.786092, -122.39383),
   new google.maps.LatLng(37.785998, -122.393899),
   new google.maps.LatLng(37.785114, -122.394365),
   new google.maps.LatLng(37.785022, -122.394441),
   new google.maps.LatLng(37.784823, -122.394635),
   new google.maps.LatLng(37.784719, -122.394629),
   new google.maps.LatLng(37.785069, -122.394176),
   new google.maps.LatLng(37.7855, -122.39365),
   new google.maps.LatLng(37.78577, -122.393291),
   new google.maps.LatLng(37.785839, -122.393159),
   new google.maps.LatLng(37.782651, -122.400628),
   new google.maps.LatLng(37.782616, -122.400599),
   new google.maps.LatLng(37.782702, -122.40047),
   new google.maps.LatLng(37.782915, -122.400192),
   new google.maps.LatLng(37.783137, -122.399887),
   new google.maps.LatLng(37.783414, -122.399519),
   new google.maps.LatLng(37.783629, -122.399237),
   new google.maps.LatLng(37.783688, -122.399157),
   new google.maps.LatLng(37.783716, -122.399106),
   new google.maps.LatLng(37.783798, -122.399072),
   new google.maps.LatLng(37.783997, -122.399186),
   new google.maps.LatLng(37.784271, -122.399538),
   new google.maps.LatLng(37.784577, -122.399948),
   new google.maps.LatLng(37.784828, -122.40026),
   new google.maps.LatLng(37.784999, -122.400477),
   new google.maps.LatLng(37.785113, -122.400651),
   new google.maps.LatLng(37.785155, -122.400703),
   new google.maps.LatLng(37.785192, -122.400749),
   new google.maps.LatLng(37.785278, -122.400839),
   new google.maps.LatLng(37.785387, -122.400857),
   new google.maps.LatLng(37.785478, -122.40089),
   new google.maps.LatLng(37.785526, -122.401022),
   new google.maps.LatLng(37.785598, -122.401148),
   new google.maps.LatLng(37.785631, -122.401202),
   new google.maps.LatLng(37.78566, -122.401267),
   new google.maps.LatLng(37.803986, -122.426035),
   new google.maps.LatLng(37.804102, -122.425089),
   new google.maps.LatLng(37.804211, -122.424156),
   new google.maps.LatLng(37.803861, -122.423385),
   new google.maps.LatLng(37.803151, -122.423214),
   new google.maps.LatLng(37.802439, -122.423077),
   new google.maps.LatLng(37.80174, -122.422905),
   new google.maps.LatLng(37.801069, -122.422785),
   new google.maps.LatLng(37.800345, -122.422649),
   new google.maps.LatLng(37.799633, -122.422603),
   new google.maps.LatLng(37.79975, -122.4217),
   new google.maps.LatLng(37.799885, -122.420854),
   new google.maps.LatLng(37.799209, -122.420607),
   new google.maps.LatLng(37.795656, -122.400395),
   new google.maps.LatLng(37.795203, -122.400304),
   new google.maps.LatLng(37.778738, -122.415584),
   new google.maps.LatLng(37.778812, -122.415189),
   new google.maps.LatLng(37.778824, -122.415092),
   new google.maps.LatLng(37.778833, -122.414932),
   new google.maps.LatLng(37.778834, -122.414898),
   new google.maps.LatLng(37.77874, -122.414757),
   new google.maps.LatLng(37.778501, -122.414433),
   new google.maps.LatLng(37.778182, -122.414026),
   new google.maps.LatLng(37.777851, -122.413623),
   new google.maps.LatLng(37.777486, -122.413166),
   new google.maps.LatLng(37.777109, -122.412674),
   new google.maps.LatLng(37.776743, -122.412186),
   new google.maps.LatLng(37.77644, -122.4118),
   new google.maps.LatLng(37.776295, -122.411614),
   new google.maps.LatLng(37.776158, -122.41144),
   new google.maps.LatLng(37.775806, -122.410997),
   new google.maps.LatLng(37.775422, -122.410484),
   new google.maps.LatLng(37.775126, -122.410087),
   new google.maps.LatLng(37.775012, -122.409854),
   new google.maps.LatLng(37.775164, -122.409573),
   new google.maps.LatLng(37.775498, -122.40918),
   new google.maps.LatLng(37.775868, -122.40873),
   new google.maps.LatLng(37.776256, -122.40824),
   new google.maps.LatLng(37.776519, -122.407928),
   new google.maps.LatLng(37.776539, -122.407904),
   new google.maps.LatLng(37.776595, -122.407854),
   new google.maps.LatLng(37.776853, -122.407547),
   new google.maps.LatLng(37.777234, -122.407087),
   new google.maps.LatLng(37.777644, -122.406558),
   new google.maps.LatLng(37.778066, -122.406017),
   new google.maps.LatLng(37.778468, -122.405499),
   new google.maps.LatLng(37.778866, -122.404995),
   new google.maps.LatLng(37.779295, -122.404455),
   new google.maps.LatLng(37.779695, -122.40395),
   new google.maps.LatLng(37.779982, -122.403584),
   new google.maps.LatLng(37.780295, -122.403223),
   new google.maps.LatLng(37.780664, -122.402766),
   new google.maps.LatLng(37.781043, -122.402288),
   new google.maps.LatLng(37.781399, -122.401823),
   new google.maps.LatLng(37.781727, -122.401407),
   new google.maps.LatLng(37.781853, -122.401247),
   new google.maps.LatLng(37.781894, -122.401195),
   new google.maps.LatLng(37.782076, -122.400977),
   new google.maps.LatLng(37.782338, -122.400603),
   new google.maps.LatLng(37.782666, -122.400133),
   new google.maps.LatLng(37.783048, -122.399634),
   new google.maps.LatLng(37.78345, -122.399198),
   new google.maps.LatLng(37.783791, -122.398998),
   new google.maps.LatLng(37.784177, -122.398959),
   new google.maps.LatLng(37.784388, -122.398971),
   new google.maps.LatLng(37.784404, -122.399128),
   new google.maps.LatLng(37.784586, -122.399524),
   new google.maps.LatLng(37.784835, -122.399927),
   new google.maps.LatLng(37.785116, -122.400307),
   new google.maps.LatLng(37.785282, -122.400539),
   new google.maps.LatLng(37.785346, -122.400692),
   new google.maps.LatLng(37.765769, -122.407201),
   new google.maps.LatLng(37.76579, -122.407414),
   new google.maps.LatLng(37.765802, -122.407755),
   new google.maps.LatLng(37.765791, -122.408219),
   new google.maps.LatLng(37.765763, -122.408759),
   new google.maps.LatLng(37.765726, -122.409348),
   new google.maps.LatLng(37.765716, -122.409882),
   new google.maps.LatLng(37.765708, -122.410202),
   new google.maps.LatLng(37.765705, -122.410253),
   new google.maps.LatLng(37.765707, -122.410369),
   new google.maps.LatLng(37.765692, -122.41072),
   new google.maps.LatLng(37.765699, -122.411215),
   new google.maps.LatLng(37.765687, -122.411789),
   new google.maps.LatLng(37.765666, -122.412373),
   new google.maps.LatLng(37.765598, -122.412883),
   new google.maps.LatLng(37.765543, -122.413039),
   new google.maps.LatLng(37.765532, -122.413125),
   new google.maps.LatLng(37.7655, -122.413553),
   new google.maps.LatLng(37.765448, -122.414053),
   new google.maps.LatLng(37.765388, -122.414645),
   new google.maps.LatLng(37.765323, -122.41525),
   new google.maps.LatLng(37.765303, -122.415847),
   new google.maps.LatLng(37.765251, -122.416439),
   new google.maps.LatLng(37.765204, -122.41702),
   new google.maps.LatLng(37.765172, -122.417556),
   new google.maps.LatLng(37.765164, -122.418075),
   new google.maps.LatLng(37.765153, -122.418618),
   new google.maps.LatLng(37.765136, -122.419112),
   new google.maps.LatLng(37.765129, -122.419378),
   new google.maps.LatLng(37.765119, -122.419481),
   new google.maps.LatLng(37.7651, -122.419852),
   new google.maps.LatLng(37.765083, -122.420349),
   new google.maps.LatLng(37.765045, -122.42093),
   new google.maps.LatLng(37.764992, -122.421481),
   new google.maps.LatLng(37.76498, -122.421695),
   new google.maps.LatLng(37.764993, -122.421843),
   new google.maps.LatLng(37.764986, -122.422255),
   new google.maps.LatLng(37.764975, -122.422823),
   new google.maps.LatLng(37.764939, -122.423411),
   new google.maps.LatLng(37.764902, -122.424014),
   new google.maps.LatLng(37.764853, -122.424576),
   new google.maps.LatLng(37.764826, -122.424922),
   new google.maps.LatLng(37.764796, -122.425375),
   new google.maps.LatLng(37.764782, -122.425869),
   new google.maps.LatLng(37.764768, -122.426089),
   new google.maps.LatLng(37.764766, -122.426117),
   new google.maps.LatLng(37.764723, -122.426276),
   new google.maps.LatLng(37.764681, -122.426649),
   new google.maps.LatLng(37.782012, -122.4042),
   new google.maps.LatLng(37.781574, -122.404911),
   new google.maps.LatLng(37.781055, -122.405597),
   new google.maps.LatLng(37.780479, -122.406341),
   new google.maps.LatLng(37.779996, -122.406939),
   new google.maps.LatLng(37.779459, -122.407613),
   new google.maps.LatLng(37.778953, -122.408228),
   new google.maps.LatLng(37.778409, -122.408839),
   new google.maps.LatLng(37.777842, -122.409501),
   new google.maps.LatLng(37.777334, -122.410181),
   new google.maps.LatLng(37.776809, -122.410836),
   new google.maps.LatLng(37.77624, -122.411514),
   new google.maps.LatLng(37.775725, -122.412145),
   new google.maps.LatLng(37.77519, -122.412805),
   new google.maps.LatLng(37.774672, -122.413464),
   new google.maps.LatLng(37.774084, -122.414186),
   new google.maps.LatLng(37.773533, -122.413636),
   new google.maps.LatLng(37.773021, -122.413009),
   new google.maps.LatLng(37.772501, -122.412371),
   new google.maps.LatLng(37.771964, -122.411681),
   new google.maps.LatLng(37.771479, -122.411078),
   new google.maps.LatLng(37.770992, -122.410477),
   new google.maps.LatLng(37.770467, -122.409801),
   new google.maps.LatLng(37.77009, -122.408904),
   new google.maps.LatLng(37.769657, -122.408103),
   new google.maps.LatLng(37.769132, -122.407276),
   new google.maps.LatLng(37.768564, -122.406469),
   new google.maps.LatLng(37.76798, -122.405745),
   new google.maps.LatLng(37.76738, -122.405299),
   new google.maps.LatLng(37.766604, -122.405297),
   new google.maps.LatLng(37.765838, -122.4052),
   new google.maps.LatLng(37.765139, -122.405139),
   new google.maps.LatLng(37.764457, -122.405094),
   new google.maps.LatLng(37.763716, -122.405142),
   new google.maps.LatLng(37.762932, -122.405398),
   new google.maps.LatLng(37.762126, -122.405813),
   new google.maps.LatLng(37.761344, -122.406215),
   new google.maps.LatLng(37.760556, -122.406495),
   new google.maps.LatLng(37.759732, -122.406484),
   new google.maps.LatLng(37.75891, -122.406228),
   new google.maps.LatLng(37.758182, -122.405695),
   new google.maps.LatLng(37.757676, -122.405118),
   new google.maps.LatLng(37.757039, -122.404346),
   new google.maps.LatLng(37.756335, -122.403719),
   new google.maps.LatLng(37.755503, -122.403406),
   new google.maps.LatLng(37.754665, -122.403242),
   new google.maps.LatLng(37.753837, -122.403172),
   new google.maps.LatLng(37.752986, -122.403112),
   new google.maps.LatLng(37.751266, -122.403355),
   */
  ];
}

function deleteHeatMap() {
  heatmap.setMap(null);

}

  // Get the checkbox element
  var checkbox = document.getElementById('heat_map_check_box');

  // Add an event listener to respond to changes in the checkbox state
  checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      heatmap1();


      // Perform actions when checkbox is checked
    } else {
      deleteHeatMap();
      console.log('Checkbox is unchecked');
      // Perform actions when checkbox is unchecked
    }
  });



