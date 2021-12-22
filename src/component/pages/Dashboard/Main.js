import React from 'react'

function Main() {
    return (
       
            <main class="container-fluid mt-5">
        <section class="row">
          <div class="col-md-6 col-lg-4">
       
            <article class="p-4 rounded shadow-sm border-left
               mb-4">
              <a href="#" class="d-flex align-items-center">
                <span class="bi bi-box h5"></span>
                <h5 class="ml-2">card</h5>
              </a>
            </article>
          </div>
          <div class="col-md-6 col-lg-4">
            <article class="p-4 rounded shadow-sm border-left mb-4">
              <a href="#" class="d-flex align-items-center">
                <span class="bi bi-person h5"></span>
                <h5 class="ml-2">card</h5>
              </a>
            </article>
          </div>
          <div class="col-md-6 col-lg-4">
            <article class="p-4 rounded shadow-sm border-left mb-4">
              <a href="#" class="d-flex align-items-center">
                <span class="bi bi-person-check h5"></span>
                <h5 class="ml-2">card</h5>
              </a>
            </article>
          </div>
        </section>
        
        <div class="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
  <div class="container">
    <h1 class="display-4 mb-2 text-primary">user</h1>
    <p class="lead text-muted">topic</p>
  </div>
</div>
      </main>
   
    )
}

export default Main
