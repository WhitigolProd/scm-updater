function HandleUpdateButton() {
    if (ver.current != ver.latest) {
        elements.main.buttons.update.show();
    }
}

//? Display CAD Status Change
if (st.cad == 'false') {
    $(elements.main.status).attr('data-status', 'offline');
    $(elements.main.buttons.stop).css('display', 'none');
    $(elements.main.buttons.start).css('display', 'flex');
} else if (st.cad == 'true') {
    $(elements.main.status).attr('data-status', 'online');
    $(elements.main.buttons.stop).css('display', 'flex');
    $(elements.main.buttons.start).css('display', 'none');
}
setInterval(() => {
    if (st.cad == 'false') {
        $(elements.main.status).attr('data-status', 'offline');
        $(elements.main.buttons.stop).css('display', 'none');
        $(elements.main.buttons.start).css('display', 'flex');
    } else if (st.cad == 'true') {
        $(elements.main.status).attr('data-status', 'online');
        $(elements.main.buttons.stop).css('display', 'flex');
        $(elements.main.buttons.start).css('display', 'none');
    }
}, 1000);

$(elements.main.buttons.start).on('click', () => {
    spw(
        `node scripts/copy-env.mjs --client --api && yarn workspace @snailycad/client build && yarn run concurrently "yarn workspace @snailycad/client start" "yarn workspace @snailycad/api generate && yarn workspace @snailycad/api start"`
    );
});

$(elements.main.buttons.stop).on('click', () => {
    spw(`npx kill-port ${config.cadPort} && npx kill-port ${config.cadAPI}`);
});

$(elements.main.buttons.update).on('click', () => {
    spw(
        `curl https://raw.githubusercontent.com/SnailyCAD/autoupdater/main/dist/index.js > script.js && node script.js`
    );
});

$(elements.main.buttons.dir).on('click', () => {
    cmd(`start ${config.cadDir}`);
});

$(`#mg-docs`).on('click', () => {
    cmd(`start ${app.links.manager.docs}`)
})

$(elements.main.buttons.github).on('click', () => {
    cmd(`start ${app.links.cad.github}`);
});

$(elements.main.buttons.docs).on('click', () => {
    cmd(`start ${app.links.cad.docs}`);
});

$('#clearCMD').on('click', () => {
    $('.cmd').html('');
    addToOutputStream('Command View Cleared', 'f');
});

$(`.reportProblem`).on('click', () => {
    cmd(`start ${app.links.manager.report}`);
})

$(`#closeLog`).on('click', () => {
    $(`log`).fadeOut();
})

$(`#appUpdate`).on(`click`, () => {
    $(`#appNoUpdate`).hide();
    $(`#appUpdate`).hide();
    $(`update`).append(`<p aria-busy="true">Updating SnailyCAD Manager, please wait...</p>`)
    $(`update`).append(`<p aria-busy="true">Please do <b>not</b> restart or close the app while the update is in progress.</p>`)
    $(`update`).append(`<p aria-busy="true">Once the update is complete, the app will restart automatically.</p>`)
    updateApp(`git init & git remote add origin https://github.com/WhitigolProd/scm-updater & git clone https://github.com/WhitigolProd/scm-updater.git tmp && git reset --mixed && xcopy tmp\\ .\\ /e /y && rm -r -f tmp .git`, pre.coreDir);
})

$(`#appNoUpdate`).on(`click`, () => {
    $(`update`).fadeOut();
    app.versions.skipUpdate = true;
})