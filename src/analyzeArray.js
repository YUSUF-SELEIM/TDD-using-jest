export default function analyzeArray(ar){
    var max = -Infinity;
    var min = Infinity;
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
        if(ar[i] > max){
            max = ar[i];
        }
        if(ar[i] < min){
            min = ar[i];
        }
        sum += ar[i];
    }

    return {
        average : sum/ar.length,
        min : min,
        max : max,
        length : ar.length
    };

}