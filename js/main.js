// Node: Image Tiles

// Node: Info Sheet
var info_sheet = document.getElementById("info_sheet");
var info_sheet_header = document.getElementById("info_sheet_header");
var info_sheet_text = document.getElementById("info_sheet_text");
var image_holder = document.getElementById("image-holder-id");

// Node: Start
var start_button = document.getElementById("start-btn");

// Node: Randomize
var random_button = document.getElementById("random-btn");

// Node: Reset
var reset_button = document.getElementById("reset-btn");

// Node: Speed
var speed_1x = document.getElementById("speed_1x");
var speed_2x = document.getElementById("speed_2x");
var speed_4x = document.getElementById("speed_4x");
var speed_8x = document.getElementById("speed_8x");

// Node: Tile Division

// Node: Selected Algorithm
var bubble_sort = document.getElementById("bubble_sort");
var selection_sort = document.getElementById("selection_sort");
var insertion_sort = document.getElementById("insertion_sort");
var heap_sort = document.getElementById("heap_sort");
var merge_sort = document.getElementById("merge_sort");
var quick_sort = document.getElementById("quick_sort");
var shell_sort = document.getElementById("shell_sort");
var counting_sort = document.getElementById("counting_sort");
var radix_sort = document.getElementById("radix_sort");

// Node: Selected Image and Text
var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var img_3 = document.getElementById("img_3");
var img_4 = document.getElementById("img_4");
var img_5 = document.getElementById("img_5");
var img_6 = document.getElementById("img_6");
var img_7 = document.getElementById("img_7");
var img_8 = document.getElementById("img_8");
var img_9 = document.getElementById("img_9");
var img_10 = document.getElementById("img_10");
var img_11 = document.getElementById("img_11");
var img_12 = document.getElementById("img_12");
var img_13 = document.getElementById("img_13");
var img_14 = document.getElementById("img_14");
var img_15 = document.getElementById("img_15");
var img_16 = document.getElementById("img_16");
var img_17 = document.getElementById("img_17");
var img_18 = document.getElementById("img_18");
var img_19 = document.getElementById("img_19");
var img_20 = document.getElementById("img_20");
var img_21 = document.getElementById("img_21");
var img_22 = document.getElementById("img_22");


// Node: Info Sheet
var painting_info = document.getElementById("painting_info");
var algorithm_info = document.getElementById("algorithm_info");
var division_info = document.getElementById("division_info");
var speed_info = document.getElementById("speed_info");

// ---------------------------------------------------------------------------
// Sorting Algorithms

test_arr = [10, 5, 2, 6, 7, 1, 3, 8, 4 ,9]

// Bubble Sort
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      // Swap
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

// Insertion Sort
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

// Merge Sort
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2

  // Base case or terminating case
  if(array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

// Heap Sort

// Quick sort

// Shellsort

// Counting Sort

// Radix Sort


// ###########################################################################
// NODE'S ALGORITHMS
// ###########################################################################

// Start State


// Algo: Image Tiles

// Algo: Info Sheet

// Algo: Start
start_button.onclick = function() {
  alert("start");
}

// Algo: Randomize
random_button.onclick = function() {
  alert("random");
}

// Algo: Reset
reset_button.onclick = function() {
  alert("reset");
}

// Algo Info Sheet

// Algo: Speed
speed_1x.onclick = function(event) {
  event.preventDefault();
  alert("speed 1x")
}

speed_2x.onclick = function(event) {
  event.preventDefault();
  alert("speed 2x");
}

speed_4x.onclick = function(event) {
  event.preventDefault();
  alert("speed 4x");
}

speed_8x.onclick = function(event) {
  event.preventDefault();
  alert("speed 8x");
}

// Algo: Tile Division

// Algo: Selected Algorithm
bubble_sort.onclick = function(event) {
  event.preventDefault();
  alert("bubble sort");
}

selection_sort.onclick = function(event) {
  event.preventDefault();
  alert("selection sort");
}


insertion_sort.onclick = function(event) {
  event.preventDefault();
  alert("insertion sort");
}


heap_sort.onclick = function(event) {
  event.preventDefault();
  alert("heap sort");
}


merge_sort.onclick = function(event) {
  event.preventDefault();
  alert("merge sort");
}

quick_sort.onclick = function(event) {
  event.preventDefault();
  alert("quick sort");
}


shell_sort.onclick = function(event) {
  event.preventDefault();
  alert("shell sort");
}


counting_sort.onclick = function(event) {
  event.preventDefault();
  alert("counting sort");
}


radix_sort.onclick = function(event) {
  event.preventDefault();
  alert("radix sort");
}

// Image Object Clicks
img_1.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_1.jpg)";
  info_sheet_header.innerHTML = "Leonardo Da Vinci, Mona Lisa, 1503–19";
  info_sheet_text.innerHTML = "Painted between 1503 and 1517, Da Vinci’s  \
  alluring portrait has been dogged by two questions since the day it was \
  made: Who’s the subject and why is she smiling? A number of theories for\
   the former have been proffered over the years: That she’s the wife of  \
   the Florentine merchant Francesco di Bartolomeo del Giocondo (ergo, the \
     work’s alternative title, La Gioconda); that she's Leonardo’s mother, \
     Caterina, conjured from Leonardo's boyhood memories of her; and finally, \
     that it's a self-portrait in drag. As for that famous smile, its \
     enigmatic quality has driven people crazy for centuries. Whatever the \
     reason, Mona Lisa’s look of preternatural calm comports with the idealized\
      landscape behind her, which dissolves into the distance through \
      Leonardo’s use of atmospheric perspective."
}

img_2.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage= "url(image/img_2.jpg)";
  info_sheet_header.innerHTML = "Johannes Vermeer, Girl with a Pearl Earring, 1665";
  info_sheet_text.innerHTML = "Johannes Vermeer’s 1665 study of a young woman \
  is startlingly real and startlingly modern, almost as if it were a photograph.\
   This gets into the debate over whether or not Vermeer employed a pre-photogra\
   phic device called a camera obscura to create the image. Leaving that aside, \
   the sitter is unknown, though it’s been speculated that she might have been V\
   ermeer's maid. He portrays her looking over her shoulder, locking her eyes wi\
   th the viewer as if attempting to establish an intimate connection across the\
    centuries. Technically speaking, Girl isn’t a portrait, but rather an exampl\
    e of the Dutch genre called a tronie—a headshot meant more as still life of \
    facial features than as an attempt to capture a likeness.";
}

img_3.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_3.jpg)";
  info_sheet_header.innerHTML = "Vincent van Gogh, The Starry Night, 1889";
  info_sheet_text.innerHTML = "Vincent Van Gogh’s most popular painting, The Sta\
  rry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d comm\
  itted himself in 1889. Indeed, The Starry Night seems to reflect his turbulent\
   state of mind at the time, as the night sky comes alive with swirls and orbs \
   of frenetically applied brush marks springing from the yin and yang of his pe\
   rsonal demons and awe of nature.";
}

img_4.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_4.jpg)";
  info_sheet_header.innerHTML = "Gustav Klimt, The Kiss, 1907–1908";
  info_sheet_text.innerHTML = "Opulently gilded and extravagantly patterned, The\
   Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symboli\
   sm and Vienna Jugendstil, the Austrian variant of Art Nouveau. Klimt depicts \
   his subjects as mythical figures made modern by luxuriant surfaces of up-to-t\
   he moment graphic motifs. The work is a highpoint of the artist’s Golden Phas\
   e between 1899 and 1910 when he often used gold leaf—a technique inspired by \
   a 1903 trip to the Basilica di San Vitale in Ravenna, Italy, where he saw the\
    church’s famed Byzantine mosaics.";
}

img_5.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_5.jpg)";
  info_sheet_header.innerHTML = "Sandro Botticelli, The Birth of Venus, 1484–1486";
  info_sheet_text.innerHTML = "Botticelli’s The Birth of Venus was the first ful\
  l-length, non-religious nude since antiquity, and was made for Lorenzo de Medi\
  ci. It’s claimed that the figure of the Goddess of Love is modeled after one S\
  imonetta Cattaneo Vespucci, whose favors were allegedly shared by Lorenzo and \
  his younger brother, Giuliano. Venus is seen being blown ashore on a giant cla\
  mshell by the wind gods Zephyrus and Aura as the personification of spring awa\
  its on land with a cloak. Unsurprisingly, Venus attracted the ire of Savonarol\
  a, the Dominican monk who led a fundamentalist crackdown on the secular tastes\
   of the Florentines. His campaign included the infamous “Bonfire of the Vaniti\
   es” of 1497, in which “profane” objects—cosmetics, artworks, books—were burne\
   d on a pyre. The Birth of Venus was itself scheduled for incineration, but so\
   mehow escaped destruction. Botticelli, though, was so freaked out by the inci\
   dent that he gave up painting for a while.";
}

img_6.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_6.jpg)";
  info_sheet_header.innerHTML = "James Abbott McNeill Whistler, Arrangement in Grey and Black No. 1, 1871";
  info_sheet_text.innerHTML = "Whistler’s Mother, or Arrangement in Grey and Bla\
  ck No. 1, as it’s actually titled, speaks to the artist’s ambition to pursue a\
  rt for art’s sake. James Abbott McNeill Whistler painted the work in his Londo\
  n studio in 1871, and in it, the formality of portraiture becomes an essay in \
  form. Whistler’s mother Anna is pictured as one of several elements locked int\
  o an arrangement of right angles. Her severe expression fits in with the rigid\
  ity of the composition, and it’s somewhat ironic to note that despite Whistler\
  ’s formalist intentions, the painting became a symbol of motherhood.";
}

img_7.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_7.jpg)";
  info_sheet_header.innerHTML = "Jan van Eyck, The Arnolfini Portrait, 1434";
  info_sheet_text.innerHTML = "One of the most significant works produced duri\
  ng the Northern Renaissance, this composition is believed to be one of the f\
  irst paintings executed in oils. A full-length double portrait, it reputedly\
   portrays an Italian merchant and a woman who may or may not be his bride. I\
   n 1934, the celebrated art historian Erwin Panofsky proposed that the paint\
   ing is actually a wedding contract. What can be reliably said is that the p\
   iece is one of the first depictions of an interior using orthogonal perspec\
   tive to create a sense of space that se";
}

img_8.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_8.jpg)";
  info_sheet_header.innerHTML = "Hieronymus Bosch, The Garden of Earthly Delights, 1503–1515";
  info_sheet_text.innerHTML = "This fantastical triptych is generally consider\
  ed a distant forerunner to Surrealism. In truth, it’s the expression of a la\
  te medieval artist who believed that God and the Devil, Heaven and Hell were\
   real. Of the three scenes depicted, the left panel shows Christ presenting \
   Eve to Adam, while the right one features the depredations of Hell; less cl\
   ear is whether the center panel depicts Heaven. In Bosch’s perfervid vision\
    of Hell, an enormous set of ears wielding a phallic knife attacks the damn\
    ed, while a bird-beaked bug king with a chamber pot for a crown sits on it\
    s throne, devouring the doomed before promptly defecating them out again. \
    This riot of symbolism has been largely impervious to interpretation, whic\
    h may account for its widespread appeal.";
}

img_9.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_9.jpg)";
  info_sheet_header.innerHTML = "Georges Seurat, A Sunday Afternoon on the Island of La Grande Jatte, 1884–1886";
  info_sheet_text.innerHTML = "Georges Seurat’s masterpiece, evoking the Paris \
  of La Belle Epoque, is actually depicting a working-class suburban scene well\
   outside the city’s center. Seurat often made this milieu his subject, which \
   differed from the bourgeois portrayals of his Impressionist contemporaries. \
   Seurat abjured the capture-the-moment approach of Manet, Monet and Degas, go\
   ing instead for the sense of timeless permanence found in Greek sculpture. A\
   nd that is exactly what you get in this frieze-like processional of figures \
   whose stillness is in keeping with Seurat’s aim of creating a classical land\
   scape in modern form.";
}

img_10.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_10.jpg)";
  info_sheet_header.innerHTML = "Pablo Picasso, Les Demoiselles d’Avignon, 1907";
  info_sheet_text.innerHTML = "The ur-canvas of 20th-century art, Les Demoise\
  lles d’Avignon ushered in the modern era by decisively breaking with the re\
  presentational tradition of Western painting, incorporating allusions to th\
  e African masks that Picasso had seen in Paris's ethnographic museum at the\
   Palais du Trocadro. Its compositional DNA also includes El Greco’s The Vis\
   ion of Saint John (1608–14), now hanging in the Metropolitan Museum of Art\
   . The women being depicted are actually prostitutes in a brothel in the ar\
   tist's native Barcelona.";
}

img_11.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_11.jpg)";
  info_sheet_header.innerHTML = "Pieter Bruegel the Elder, The Harvesters, 1565";
  info_sheet_text.innerHTML = "Bruegel’s fanfare for the common man is conside\
  red one of the defining works of Western art. This composition was one of si\
  x created on the theme of the seasons. The time is probably early September.\
   A group of peasants on the left cut and bundle ripened wheat, while the on \
   the right, another group takes their midday meal. One figure is sacked out \
   under a tree with his pants unbuttoned. This attention to detail continues \
   throughout the painting as a procession of ever-granular observations reced\
   ing into space. It was extraordinary for a time when landscapes served most\
   ly as backdrops for religious paintings.";
}

img_12.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_12.jpg)";
  info_sheet_header.innerHTML = "Édouard Manet, Le Déjeuner sur l’herbe, 1863";
  info_sheet_text.innerHTML = "Manet’s scene of picnicking Parisians caused a s\
  candal when it debuted at the Salon des Refusés, the alternative exhibition m\
  ade up of works rejected by the jurors of the annual Salon—the official art e\
  xhibition of the Académie des Beaux-Arts that set artistic standards in Franc\
  e. The most vociferous objections to Manet’s work centered on the depiction o\
  f a nude woman in the company of men dressed in contemporary clothes. Based o\
  n motifs borrowed from such Renaissance greats as Raphael and Giorgione, Le D\
  éjeuner was a cheeky send up of classical figuration—a";
}

img_13.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_13.jpg)";
  info_sheet_header.innerHTML = "Piet Mondrian, Composition with Red Blue and Yellow, 1930";
  info_sheet_text.innerHTML = "A small painting (18 inches by 18 inches) that \
  packs a big art-historical punch, Mondrian’s work represents a radical disti\
  llation of form, color and composition to their basic components. Limiting h\
  is palette to the primary triad (red, yellow and blue), plus black and white\
  , Mondrian applied pigment in flat unmixed patches in an arrangement of squa\
  res and rectangles that anticipated Minimalism.";
}

img_14.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_14.jpg)";
  info_sheet_header.innerHTML = "Diego Rodríguez de Silva y Velázquez, Las Meninas, or The Family of King Philip IV";
  info_sheet_text.innerHTML = "A painting of a painting within a painting, Vel\
  ázquez masterpiece consists of different themes rolled into one: A portrait \
  of Spain’s royal family and retinue in Velázquez’s studio; a self-portrait; \
  an almost art-for-art’s-sake display of bravura brush work; and an interior \
  scene, offering glimpses into Velázquez’s working life. Las Meninas is also \
  a treatise on the nature of seeing, as well as a riddle confounding viewers \
  about what exactly they’re looking at. It’s the visual art equivalent of bre\
  aking the fourth wall—or in this case, the studio’s far wall on which there \
  hangs a mirror reflecting the faces of the Spanish King and Queen. Immediate\
  ly this suggests that the royal couple is on our side of the picture plane, \
  raising the question of where we are in relationship to them. Meanwhile, Vel\
  ázquez’s full length rendering of himself at his easel begs the question of \
  whether he’s looking in a mirror to paint the picture. In other words, are t\
  he subjects of Las Meninas (all of whom are fixing their gaze outside of the\
     frame), looking at us, or looking at themselves?";
}

img_15.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_15.jpg)";
  info_sheet_header.innerHTML = "Pablo Picasso, Guernica, 1937";
  info_sheet_text.innerHTML = "Perhaps Picasso’s best-known painting, Guernica \
  is an antiwar cris de coeur occasioned by the 1937 bombing of the eponymous B\
  asque city during the Spanish Civil War by German and Italian aircraft allied\
   with Fascist leader Francisco Franco. The leftist government that opposed hi\
   m commissioned Picasso to created the painting for the Spanish Pavillion at \
   1937 World’s Fair in Paris. When it closed, Guernica went on an internationa\
   l tour, before winding up at the Museum of Modern Art in New York. Picasso l\
   oaned the painting to MoMA with the stipulation that it be returned to his n\
   ative Spain once democracy was restored—which it was in 1981, six years afte\
   r Franco's death in 1975 (Picasso himself died two years before that.) Today\
   , the painting is housed at the Museo Nacional Centro de Arte Reina Sofía in\
    Madrid.";
}

img_16.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_16.jpg)";
  info_sheet_header.innerHTML = "Francisco de Goya y Lucientes, The Naked Maja, circa 1797–1800";
  info_sheet_text.innerHTML = "Definitely comfortable in her own skin, this \
  female nude staring unashamedly at the viewer caused quite a stir when it \
  was painted, and even got Goya into hot water with the Spanish Inquisition.\
   Among other things, it features one of the first depictions of public hair \
   in Western art. Commissioned by Manuel de Godoy, Spain’s Prime Minister, The\
    Naked Maja was accompanied by another version with the sitter clothed. The\
     identity of the woman remains a mystery, though she is most thought to be\
      Godoy’s young mistress, Pepita Tudó.";
}

img_17.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_17.jpg)";
  info_sheet_header.innerHTML = "Jean Auguste Dominique Ingres, Grande Odalisque, 1814";
  info_sheet_text.innerHTML = "Commissioned by Napoleon’s sister, Queen Caroli\
  ne Murat of Naples, Grande Odalisque represented the artist’s break with the\
   Neo-classical style he’d been identified with for much of his career. The w\
   ork could be described as Mannerist, though it’s generally thought of as a \
   transition to Romanticism, a movement that abjured Neo-classicalism’s preci\
   sion, formality and equipoise in favor of eliciting emotional reactions fro\
   m the viewer. This depiction of a concubine languidly posed on a couch is n\
   otable for her strange proportions. Anatomically incorrect, this enigmatic,\
    uncanny figure was greeted with jeers by critics at the time, though it ev\
    entually became one of Ingres most enduring works.";
}

img_18.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_18.jpg)";
  info_sheet_header.innerHTML = "Eugène Delacroix, Liberty Leading the People, 1830";
  info_sheet_text.innerHTML = "Commemorating the July Revolution of 1830, which \
  toppled King Charles X of France, Liberty Leading the People has become synony\
  mous with the revolutionary spirit all over the world. Combining allegory with\
   contemporary elements, the painting is a thrilling example of the Romantic st\
   yle, going for the gut with its titular character brandishing the French Tric\
   olor as members of different classes unite behind her to storm a barricade st\
   rewn with the bodies of fallen comrades. The image has inspired other works o\
   f art and literature, including the Statue of Liberty and Victor Hugo’s novel\
    Les Misérables.";
}

img_19.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_19.jpg)";
  info_sheet_header.innerHTML = "Claude Monet, Impression, Sunrise, 1874";
  info_sheet_text.innerHTML = "The defining figure of Impressionism, Monet virt\
  ually gave the movement its name with his painting of daybreak over the port \
  of Le Havre, the artist’s hometown. Monet was known for his studies of light \
  and color, and this canvas offers a splendid example with its flurry of brush\
   strokes depicting the sun as an orange orb breaking through a hazy blue meld\
   ing of water and sky.";
}

img_20.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_20.jpg)";
  info_sheet_header.innerHTML = "Caspar David Friedrich, Wanderer above the Sea of Fog, 1819";
  info_sheet_text.innerHTML = "The worship of nature, or more precisely, the f\
  eeling of awe it inspired, was a signature of the Romantic style in art, and\
   there is no better example on that score than this image of a hiker in the \
   mountains, pausing on a rocky outcrop to take in his surroundings. His back\
    is turned towards the viewer as if he were too enthralled with the landsca\
    pe to turn around, but his pose offers a kind of over-the-shoulder view th\
    at draws us into vista as if we were seeing it through his eyes.";
}

img_21.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_21.jpg)";
  info_sheet_header.innerHTML = "Théodore Géricault, The Raft of the Medusa, 1818–1819";
  info_sheet_text.innerHTML = "For sheer impact, it’s hard to top The Raft of \
  the Medusa, in which Géricault took a contemporary news event and transforme\
  d it into a timeless icon. The backstory begins with the 1818 sinking of the\
   French naval vessel off the coast of Africa, which left 147 sailors adrift \
   on a hastily constructed raft. Of that number, only 15 remained after a 13-\
   day ordeal at sea that included incidents of cannibalism among the desperat\
   e men. The larger-than-life-size painting, distinguished by a dramatic pyra\
   midal composition, captures the moment the raft’s emaciated crew spots a re\
   scue ship. Géricault undertook the massive canvas on his own, without anyon\
   e paying for it, and approached it much like an investigative reporter, inte\
   rviewing survivors and making numerous detailed studies based on their testi\
   mony.";
}

img_22.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_22.jpg)";
  info_sheet_header.innerHTML = "Edward Hopper, Nighthawks, 1942";
  info_sheet_text.innerHTML = "An iconic depiction of urban isolation, Nighth\
  awks depicts a quarter of characters at night inside a greasy spoon with an\
   expansive wraparound window that almost takes up the entire facade of the d\
   iner. Its brightly lit interior—the only source of illumination for the sc\
   ene—floods the sidewalk and the surrounding buildings, which are otherwise \
   dark. The restaurant's glass exterior creates a display-case effect that he\
   ightens the sense that the subjects (three customers and a counterman) are \
   alone together. It's a study of alienation as the figures studiously ignore\
    each other while losing themselves in a state of reverie or exhaustion. Th\
    e diner was based on a long-demolished one in Hopper's Greenwich Village \
    neighborhood, and some art historians have suggested that the painting as \
    a whole may have been inspired by Vincent van Gogh’s Café Terrace at Night\
    , which was on exhibit at a gallery Hopper frequented at same time he pain\
    ted Nighthawks Also of note: The redheaded woman on the far right is the a\
    rtist's wife Jo, who frequently modeled for him.";
}
