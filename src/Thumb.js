/*
 * @class Thumb
 */

import PraiseButton from './PraiseButton.js';

export default class Thumb extends PraiseButton {
    constructor() {
        super();
        this.$thumbWrapper = $('.thumb-wrapper');
        this.$likeCountWrapper = $(`<div class='like-count-wrapper'>
                                        <span class='like-count'>
                                            ${this.likeCount}
                                        </span>
                                        Like!
                                    </div>`);
        this.$thumbPic = $(`<div class='thumb-pic'></div>`);
        this.$thumbPic.on('click', this.update.bind(this));
        this.$thumbWrapper.append(this.$likeCountWrapper)
                          .append(this.$thumbPic);
    }
    
    update() {
        this.doLike();
        $('.like-count').html(this.likeCount);
    }
}
