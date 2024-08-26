document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});

let infoFill = document.getElementById("infoFiller");

document.getElementById("eventClick").addEventListener("click", function(){
    infoFill.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quibusdam facilis nisi quis aliquid et eligendi beatae ipsa tenetur natus, aut sunt adipisci iste, sint consequuntur harum? Quibusdam eum ducimus pariatur placeat repudiandae, harum expedita voluptates tempore recusandae eius dicta velit nisi quia blanditiis cumque dolore hic voluptatum? Maxime nihil porro neque dolore temporibus. Ab cum incidunt libero ducimus deserunt reprehenderit quasi aut officia a! Possimus, rem repellat molestias veritatis libero voluptatum sit, beatae officia minus quo esse dolorum provident expedita veniam! Iusto placeat necessitatibus enim corporis nisi nobis animi!";
});
document.getElementById("classClick").addEventListener("click", function(){
    infoFill.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam doloribus tempore similique sequi placeat porro quae, quod recusandae voluptatibus cupiditate nobis rerum magnam laboriosam alias dolores rem ullam, voluptatem fugiat. Iste sunt consequuntur sit non similique temporibus obcaecati, enim facere sequi officia doloribus rerum eos explicabo sed quidem veritatis. Ducimus est et omnis, maiores commodi dolore enim quasi incidunt quos sequi consequuntur neque ab corrupti, aspernatur deserunt beatae dicta ipsum modi voluptates? Consectetur porro consequatur maxime dolorum accusantium. Iste repellendus quae cum officia dolor impedit omnis? Iure harum repellat ipsa porro dolore sed! Harum voluptatem laudantium amet accusantium, quisquam eum provident qui, ducimus alias reiciendis magni sed non quidem mollitia.";
});