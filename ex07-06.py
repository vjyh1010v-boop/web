s1 = "안녕하세요."
s2 = "계산하기 좋은 날 이에요."
s3 = "끝이에요."

sum = ''
sum += s1
for x in range(5):
    sum += s2
sum += s3
print(sum)