document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center logo-hover" href="/">
                        <img src="/assets/img/logo.png" alt="Snow Rider 3D" />
                        <span class="ms-2">Snow Rider 3D</span>
                    </a>
                    <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                        <span class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <div class="search-container">
                            <input type="text" id="search-input" class="search-input" placeholder="Search 500+ Games Here" />
                            <button id="search-button" class="btn search-button" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;

    // Create a div container
    const headerContainer = document.createElement("div");
    headerContainer.innerHTML = headerHTML;

    // Append the header to the body or a specific element
    document.body.prepend(headerContainer);
});
