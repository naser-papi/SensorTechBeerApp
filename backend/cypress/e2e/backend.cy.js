describe('backend tests', () => {
    it('should return list of all products with specific json format', () => {
        cy.api({
            method: "GET",
            url: "/api/productList",
        }).then(resp => {
            expect(resp.status).to.be.eq(200);
            expect(resp.body).have.length.gt(0);
            expect(resp.body[0]).haveOwnProperty("id");
            expect(resp.body[0]).haveOwnProperty("name");
            expect(resp.body[0]).haveOwnProperty("minimumTemperature");
            expect(resp.body[0]).haveOwnProperty("maximumTemperature");
        })
    })
    it('should return current temperature of beer holder', function () {
        cy.api({
            method: "GET",
            url: "/api/productList",
        }).then(resp => {
            expect(resp.status).to.be.eq(200);
            expect(resp.body).have.length.gt(0);
            cy.api({
                method: "GET",
                url: `/api/temperature/${resp.body[0].id}`
            }).then(resp => {
                expect(resp.status).to.be.eq(200);
                expect(resp.body).haveOwnProperty("id");
                expect(resp.body).haveOwnProperty("temperature");
                expect(resp.body).haveOwnProperty("status");
            })
        })
    });
})