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

// Start State
// ...!!!

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
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_5.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_5.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_6.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_6.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_7.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_7.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_8.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_8.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_9.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_9.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_10.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_10.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_11.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_11.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_12.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_12.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_13.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_13.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_14.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_14.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_15.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_15.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_16.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_16.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_17.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_17.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_18.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_18.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_19.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_19.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_20.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_20.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_21.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_21.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
img_22.onclick = function(event) {
  event.preventDefault();
  image_holder.style.backgroundImage="url(image/img_22.jpg)";
  info_sheet_header.innerHTML = "test";
  info_sheet_text.innerHTML = "test";
}
