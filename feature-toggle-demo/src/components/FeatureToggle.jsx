import "./FeatureToggle.css";

export default function FeatureToggle({isEnabled, featureName}){
    const myClassName = `toggle ${isEnabled ? "enabled" : "disabled"}`;
// console.log("className: ", myClassName);

    return (
        <p className={myClassName}>
            {isEnabled 
                ? featureName
                : `Feature ${featureName} is disabled` }
        </p>
    );
};