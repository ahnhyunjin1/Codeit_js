$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);
$(document).on('keydown', processKeyEvent);

$(document).on('keydown', processKeyEvent);

//사진 바꿔주는 함수
function clickHome() {
    $('#photo').attr('src', './images/home.png')
    $('#home').css('font-weight', 'bold')
    $('#seoul').css('font-weight', 'normal')
    $('#tokyo').css('font-weight', 'normal')
    $('#paris').css('font-weight', 'normal')

}
function clickSeoul() {
    $('#photo').attr('src', './images/seoul.png')
    $('#seoul').css('font-weight', 'bold')
    $('#home').css('font-weight', 'normal')
    $('#tokyo').css('font-weight', 'normal')
    $('#paris').css('font-weight', 'normal')
}
function clickTokyo() {
    $('#photo').attr('src', './images/tokyo.png')
    $('#tokyo').css('font-weight', 'bold')
    $('#seoul').css('font-weight', 'normal')
    $('#home').css('font-weight', 'normal')
    $('#paris').css('font-weight', 'normal')
}
function clickParis() {
    $('#photo').attr('src', './images/paris.png')
    $('#paris').css('font-weight', 'bold')
    $('#seoul').css('font-weight', 'normal')
    $('#tokyo').css('font-weight', 'normal')
    $('#home').css('font-weight', 'normal')
}

function mouseEnterPhoto() {
    $('#photo').css('box-shadow', '5px 10px');
}

function mouseLeavePhoto() {
    $('#photo').css('box-shadow', 'none');
}

//키보드 이벤트 ( 1번 홈 / 2번 서울 / 3번 도쿄 / 4번 파리)
function processKeyEvent() {
    if (event['key'] === '1') {
        clickHome();
    } else if (event['key'] === '2') {
        clickSeoul();
    } else if (event['key'] === '3') {
        clickTokyo();
    } else if (event['key'] === '4') {
        clickParis();
    }
}
//키보드 이벤트 핸들링

function processKeyEvent(event) {
    if (event['key'] === '1') {
        clickHome();
    } else if (event['key'] === '2') {
        clickSeoul()
    } else if (event['key'] === '3') {
        clickTokyo();
    } else if (event['key'] === '4') {
        clickParis();
    }
}