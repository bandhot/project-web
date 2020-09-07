
document.getElementsByName("topik")[0].addEventListener('submit', function (event) {

    event.preventDefault();

    var data = ['nama', 'topik1', 'email'];

    template = "";

    data.forEach(element => {
        value = document.getElementsByName(element)[0].value;
        template += `
                <td>`+ value + `</td>`;

    });

    old = document.getElementById('hasil').innerHTML;

    document.getElementById('hasil').innerHTML = old + template;


});
