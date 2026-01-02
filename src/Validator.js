export const OnCallDateValidator = {
  errorMessage: '유효하지 않은 입력 값입니다. 다시 입력해 주세요.',

  monthValidate(value) {
    value = Number(value);
    if (!Number.isInteger(value)) {
      throw new Error(this.errorMessage);
    }
    if (1 > value || 12 < value) {
      throw new Error(this.errorMessage);
    }
  },

  dayValidate(value) {
    if (!(['일', '월', '화', '수', '목', '금', '토'].includes(value))) {
      throw new Error(this.errorMessage);
    }
  },
}

export const OnCallMemberValidator = {
  errorMessage: '유효하지 않은 입력 값입니다. 다시 입력해 주세요.',

  validate(weekdayMember, weekendMember) {
    weekdayMember = weekdayMember.split(',');
    weekendMember = weekendMember.split(',');
    const memberTotalCnt = new Set([...weekdayMember, weekendMember]).size;
    [...weekdayMember, ...weekendMember].forEach((member) => {
      if (member.length > 5) {
        throw new Error(this.errorMessage);
      }
    });
    if (weekdayMember.length !== new Set(weekdayMember).size) {
      throw new Error(this.errorMessage);
    }
    if (weekendMember.length !== new Set(weekendMember).size) {
      throw new Error(this.errorMessage);
    }
    if (5 > memberTotalCnt || 35 < memberTotalCnt) {
      throw new Error(this.errorMessage);
    }
  }
}
