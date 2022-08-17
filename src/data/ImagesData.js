const backgrounds = [
    { bg: 'calmBackground', src:(require('../../assets/ParentOnboarding/calm-background.png')) },
    { bg: 'gardenBg1', src:(require('../../assets/Garden_bg1.png')) },
    { bg: 'aboutGroundingBackground', src:(require('../../assets/AboutGroundingBackground.png')) }
]
const userSelectedData = [
    { image: require('../../assets/ParentOnboarding/Large-Card1.png'), name: 'grownUp' },
    { image: require('../../assets/ParentOnboarding/Large-Card2.png'), name: 'child' },
    { image: require('../../assets/ParentOnboarding/Large-Card1-Selected.png'), name: 'grownUpSelected' },
    { image: require('../../assets/ParentOnboarding/Large-Card2-Selected.png'), name: 'childSelected' },
]
const instructionImages = [
    { image: require('../../assets/instructions/rounded-fern.png'), name:'fern' },
    { image: require('../../assets/instructions/rounded-aloe.png'), name:'aloe' },
    { image: require('../../assets/instructions/rounded-mushroom.png'), name:'mushroom' }
]
const onBoardingImages = [
    { image: require("../../assets/mermaid.png"), name: "mermaid" },
    { image: require("../../assets/bird.png"), name: "bird" },
    { image: require("../../assets/Tree.png"), name: "tree" },
]

export { backgrounds, userSelectedData, instructionImages, onBoardingImages };