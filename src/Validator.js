const OnCallDateValidator = {
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

export default OnCallDateValidator;
