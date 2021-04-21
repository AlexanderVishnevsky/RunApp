import '@testing-library/react';

const { REACT_APP_API_URL, REACT_APP_TEST_ECHO } = process.env;

/**
 * Simple ECHO Tests
 */
test('echo get', () => {
    return fetch(`${REACT_APP_API_URL}/${REACT_APP_TEST_ECHO}`, { method: 'GET' }).then((data) => {
        expect(data.status).toBe(200);
    });
});

test('echo post', () => {
    return fetch(`${REACT_APP_API_URL}/${REACT_APP_TEST_ECHO}`, { method: 'POST' }).then((data) => {
        expect(data.status).toBe(201);
    });
});

test('echo put', () => {
    return fetch(`${REACT_APP_API_URL}/${REACT_APP_TEST_ECHO}`, { method: 'PUT' }).then((data) => {
        expect(data.status).toBe(200);
    });
});

test('echo delete', () => {
    return fetch(`${REACT_APP_API_URL}/${REACT_APP_TEST_ECHO}`, { method: 'DELETE' }).then((data) => {
        expect(data.status).toBe(200);
    });
});
