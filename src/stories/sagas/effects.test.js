const { call, put } = require("redux-saga/effects");

const api = {
    signIn: user => {
        throw new Error("I should not run");
        return Promise.resolve();
    }
}

const actions = {
    setAuthUser: result => ({ type: "AUTH", result }),
    alertError: error => ({ type: "ALERT_ERROR", error }),
}

const resultError = { ok: false };

const resultOK = { ok: true };

const user = { userName: "admin", password: "secret" };

function* signIn(user) {
    const result = yield call(api.signIn, user);

    if (result.ok) {
        yield put(actions.setAuthUser(result));
    } else {
        yield put(actions.alertError(result));
    }
}

describe("effects", () => {
    let gen;
    beforeEach(() => {
        gen = signIn(user);

        expect(gen.next().value)
            .toEqual(call(api.signIn, user));
    });

    test("signIn ok", () => {
        console.log(call(api.signIn, user));
        expect(gen.next(resultOK).value)
            .toEqual(put(actions.setAuthUser(resultOK)));
    });

    test("signIn error", () => {
        expect(gen.next(resultError).value)
            .toEqual(put(actions.alertError(resultError)));
    });
});
