import PraiseButton from "../src/PraiseButton.js";

describe("Test PaiseButton functions", function() {
    it("Like+1 Function", function() {
        const praiseButton = new PraiseButton();
        expect(praiseButton.likeCount).toBe(0);
        praiseButton.doLike();
        expect(praiseButton.likeCount).toBe(1);
    });
});