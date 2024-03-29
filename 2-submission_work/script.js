const features = document.getElementById("features");
const company = document.getElementById("company")
const downArrow = document.getElementById("down");
const companyDownArrow = document.getElementById("company-down");
const featuresUpArrow = document.getElementById("features-up")
const companyUpArrow = document.getElementById("company-up")
const featuresPopup = document.getElementById("features-popup")
const companyPopup = document.getElementById("company-popup")

features.addEventListener("click", () => {
    if(featuresPopup.classList.contains("hidden")){
        featuresPopup.classList.remove("hidden")
        featuresUpArrow.classList.remove("hidden")
        downArrow.classList.add("hidden")

    }else {
        featuresPopup.classList.add("hidden")
        featuresUpArrow.classList.add("hidden")
        downArrow.classList.remove("hidden")
    }
})

company.addEventListener("click", () => {
    if(companyPopup.classList.contains("hidden")){
        companyPopup.classList.remove("hidden")
        companyUpArrow.classList.remove("hidden")
        companyDownArrow.classList.add("hidden")

    }else {
        companyPopup.classList.add("hidden")
        companyUpArrow.classList.add("hidden")
        companyDownArrow.classList.remove("hidden")
    }
})



const settingAttributes = (element, tag, value) => {
    element.setAttribute(tag, value)
}

const appendElements = (parent, children) => {
    children.forEach(child => {
        parent.append(child)
    });
}

const createText = (element, text) => {
    element.textContent = text;
}


