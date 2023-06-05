function createElemets() {
    console.log('adding data')
    var str = `
    <h2 class="title">iBHIBH’ 2 Official Load-shedding Traffic Controller Uniform</h2>
    <br>
    <p class="info">
        Official Load-shedding Traffic Controller Uniform This is the only qualification needed to become an official traffic controller when amarobots don’t work.
    </p> <br>
    <div class="btns">
        <div style="display:flex;">
            <div>
                <button style="border-radius:30px;border:none;background:#345629;color:white;padding-left:20px;padding-right:20px;font-size:20px;font-family: Roboto Condensed;font-weight:bold;padding-top:5px;padding-bottom:5px">
                SHARE
              </button>
            </div>
            <div style="min-width:5%;">

            </div>
            <div><button style="border-radius:30px;border:none;background:#345629;color:white;padding-left:20px;padding-right:20px;font-size:20px;font-family: Roboto Condensed;font-weight:bold;padding-top:5px;padding-bottom:5px">
                BUY NOW
              </button>
            </div>
        </div>
    </div>
    `
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.content').insertAdjacentHTML('beforeend', str)
}
var allData = [{
    title: "iBHIBH’ <br> Official Load-shedding Traffic Controller Uniform ",
    p_tag: 'This is the only qualification needed to become an official traffic controller when amarobot doesn’t work.  '
}, {
    title: "SHOPPER BAG <br> The Official Carrier You Always Forget ",
    p_tag: 'There are multiple of them in each house. But somehow, they get forgotten every shopping trip and now you have to buy yet another.'
}]