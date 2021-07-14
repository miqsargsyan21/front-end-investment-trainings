function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function includeHTML(callback) {
  const elements = document.querySelectorAll('[data-href]');

  if (elements.length === 0) {
    if (typeof callback === 'function') {
      callback();
    }

    return;
  }

  const element = elements[0];

  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        element.innerHTML = this.responseText;
      } else if (this.status === 404) {
        element.innerHTML = "Page not found.";
      }

      element.removeAttribute("data-href");

      includeHTML(callback);
    }
  };

  xhttp.open("GET", element.getAttribute("data-href"), true);

  xhttp.send();
}

function addCity() {
  let city = '';

  if (window.location.search) {
    city = getParameterByName('city', window.location.search);
  }

  if (city) {
    const links = document.getElementsByClassName('link-with-city');
    const area = document.getElementsByClassName('area');

    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('href', `${links[i].getAttribute('href')}?city=${city}`);
    }

    if (city === 'Fasadmålning i Järfälla') {
      const specials = document.getElementsByClassName('special');

      for (let i = 0; i < specials.length; i++) {
        specials[i].innerHTML = i > 0 ? 'fasadmålning i Järfälla' : 'Fasadmålning i Järfälla';
      }
      return;
    }

    for (let i = 0; i < area.length; i++) {
      area[i].innerHTML = city;
    }
  }
}

function changeArea(area) {
  const href = window.location.href;
  let link = '';
  const city = getParameterByName('city', href);

  if (city) {
    link = `${href.split('?')[0]}?city=${area}`;
  } else {
    link = `${href}?city=${area}`;
  }

  window.location.href = link;
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML(addCity);
});