positions = []
function getPoligonOrientation(position=0, number_items, width=9, height=2, parity="pair"){
    let space_width;
    if(parity == "pair" ){
        debugger;
        space_width = number_items/height;
        for(let x = 0; x<=number_items; x++){
            positions.append(1);
        }
        return positions;
    }
    else{
        space_width = number_items/height;
        return Math.sqrt(height-position^2/width);
    }
}

console.log(getPoligonOrientation(2, 'pair'))

function getSlideNumbers(number){
    let pair = 0;
    let odd = 0;
    for(let number_slides = 1; number_slides<=number; number_slides++){
        if(number_slides%2 == 0){
            pair++;
        }
        else{
            odd++
        }
    }
    createSlides(pair, odd);
}

function createSlides(pair, odd){
    pair_position = this.getPoligonOrientation(pair)
}