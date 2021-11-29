
$('#menu a').on('click', selectMenu);

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);
$(document).on('keydown', processKeyEvent);



function selectMenu(event) {
    // var targetId = (event.currentTarget.id);

    var targetId = '';
    if (event.type === 'click') {
        targetId = (event.currentTarget.id);
    } else if (event.type === 'keydown') {
        if (event.key === '1') {
            targetId = 'home';
        } else if (event.type === '2') {
            targetId = 'seoul';
        } else if (event.type === '3') {
            targetId = 'tokyo';
        } else if (event.type === '4') {
            targetId = 'paris';
        }
    }

    $('#photo').hide();
    $('#photo').attr('src', 'images/' + targetId + '.png');
    $('#photo').fadeIn(1000);
    $('#menu a').css('font-weight', 'normal');
    $('#' + targetId).css('font-weight', 'bold');
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