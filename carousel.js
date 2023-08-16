let imagesArray = ["images/aaliyah.jpg", "images/ahmed.jpg", "images/chan.jpg", "images/darnell.jpg", "images/jennifer.jpg", "images/robin.jpg", "images/sally.jpg"]
let namesArray = ["Aaliyah", "Ahmed", "Chan", "Darnell", "Jennifer", "Robin", "Sally"]
let professionsArray = ["Engineer", "Fashion-guru", "Instagram personality", "Accountant", "Energy consultant", "Soothsayer", "Life coach"]
let reviewsArray = ["Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on.", "Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested especially reasonable off one. Wonder bed elinor family secure met. It want gave west into high no in. Depend repair met before man admire see and. An he observe be it covered delight hastily message. Margaret no ladyship endeavor ye to settling.", "Yet remarkably appearance get him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mr it he mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of norland arrived.", "Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near.", "Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unfeeling he objection consisted. She although cheerful perceive screened throwing met not eat distance. Viewing hastily or written dearest elderly up weather it as. So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing.", "Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties.", "At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather."]

let portrait = document.getElementById("portrait")
let names = document.getElementById("name")
let profession = document.getElementById("profession")
let review = document.getElementById("reviewContainer")

function pickRandom() {
    let randomInt = generateInt(7)
    updatePerson(randomInt)
}

function generateInt(max) {
    let randomNum = Math.random()
    let limitedNum = randomNum * max
    let randomInt = Math.floor(limitedNum)
    return randomInt
}

let currentIndex = 0

function nextReview() {
    currentIndex++
    if (currentIndex > 6) {
        currentIndex = 0
    }
    updatePerson(currentIndex)
}

function previousReview() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = 6
    }
    updatePerson(currentIndex)
}

function updatePerson(index) {
    portrait.src = imagesArray[index]
    names.innerText = namesArray[index]
    profession.innerText = professionsArray[index]
    review.innerText = reviewsArray[index]
}
