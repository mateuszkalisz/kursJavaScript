const removeTask = (e) => {
    //1sposob
    //e.target.parentNode.remove();
    //2sposob
    //e.target.parentNode.style.textDecoration = "line-through";
    //e.target.remove();
    //3sposob

    const index = e.target.dataset.key;
    console.log(index);
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll("li button").forEach(li => li.addEventListener("click", removeTask));