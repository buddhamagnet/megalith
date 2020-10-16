FROM centos

RUN yum update -y

RUN yum install -y which wget

RUN yum -y install gcc make gdb valgrind

WORKDIR /cthw

COPY . . 

CMD ["bash"]