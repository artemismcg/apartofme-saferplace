import steps from "../data/ExercisesStepsData"

export default routeUtils = {
    getStep: (exercise, step) =>{
        return steps.find((s) => s.type === exercise && s.step === step)
    }   
}