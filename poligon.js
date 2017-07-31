positions = []
function getPoligonOrientation(number_items, position=0, width=3, height=2, parity="pair"){
    let space_width;
    if(parity == "pair" ){
        space_width = width/number_items;
        for(let x = 1; x<=number_items; x++){
            space = space_width * x
            positions.push({
              'x': space_width * x,
              'y': -Math.sqrt(width*height-space^2/2)  
            });
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
    console.log(pair_position)
}