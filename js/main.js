// Node: Image Tiles

// Node: Info Sheet
var info_sheet = document.getElementById("info_sheet");
var info_sheet_header = document.getElementById("info_sheet_header");
var info_sheet_text = document.getElementById("info_sheet_text");

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

alert(insertionSort(test_arr));

// Heap Sort

// Merge Sort

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
  alert("speed 1x");
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
  alert("img 1");
}
img_2.onclick = function(event) {
  event.preventDefault();
  alert("img_2 1");
}
img_3.onclick = function(event) {
  event.preventDefault();
  alert("img_3 1");
}
img_4.onclick = function(event) {
  event.preventDefault();
  alert("img_4 1");
}
img_5.onclick = function(event) {
  event.preventDefault();
  alert("img_5 1");
}
img_6.onclick = function(event) {
  event.preventDefault();
  alert("img_6 1");
}
img_7.onclick = function(event) {
  event.preventDefault();
  alert("img_7 1");
}
img_8.onclick = function(event) {
  event.preventDefault();
  alert("img_8 1");
}
img_9.onclick = function(event) {
  event.preventDefault();
  alert("img_9 1");
}
img_10.onclick = function(event) {
  event.preventDefault();
  alert("img_10 1");
}
img_11.onclick = function(event) {
  event.preventDefault();
  alert("img_11 1");
}
img_12.onclick = function(event) {
  event.preventDefault();
  alert("img_12 1");
}
img_13.onclick = function(event) {
  event.preventDefault();
  alert("img_13 1");
}
img_14.onclick = function(event) {
  event.preventDefault();
  alert("img_14 1");
}
img_15.onclick = function(event) {
  event.preventDefault();
  alert("img_15 1");
}
img_16.onclick = function(event) {
  event.preventDefault();
  alert("img_16 1");
}
img_17.onclick = function(event) {
  event.preventDefault();
  alert("img_17 1");
}
img_18.onclick = function(event) {
  event.preventDefault();
  alert("img_18 1");
}
img_19.onclick = function(event) {
  event.preventDefault();
  alert("img_19 1");
}
img_20.onclick = function(event) {
  event.preventDefault();
  alert("img_20 1");
}
img_21.onclick = function(event) {
  event.preventDefault();
  alert("img21 1");
}
img_22.onclick = function(event) {
  event.preventDefault();
  alert("img22 1");
}
