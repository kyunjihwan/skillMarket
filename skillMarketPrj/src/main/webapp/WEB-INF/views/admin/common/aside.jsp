<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/views/common/setup.jsp" %>


<link rel="stylesheet" href="${root}/static/css/admin/common/aside.css">

<header>
            
    <h1>메인</h1>

</header>

<aside>
    <div id="logo-area">
        <div>
            <img src="static/svg/관리자 페이지 로고.svg" alt="logo">
        </div>
    </div>
    
    <div class="side_meue" id="side_1">
        <ul>
            <li>
                <a href="">관리자</a>
            </li>
            <li>
                <a href="${root}/home">사이트 바로가기</a>
            </li>

        </ul>
    </div>
    
    <div class="side_meue" id="side_2">
        <ul>
            <li>
                <a href="${root}/admin/main">대시보드</a>
            </li>
            <li>
                <a href="${root}/admin/members">회원 관리</a>
            </li>
            <li>
                <a href="${root}/admin/report">신고 내역</a>
            </li>
            <li>
                <a href="${root}/admin/inquiry">문의 내역</a>
            </li>
            <li>
                <a href="${root}/admin/notice">공지 작성</a>
            </li>
            <li>
                <a href="${root}/admin/banner">배너 관리</a>
            </li>
            <li>
                <a href="${root}/admin/FAQ">FAQ 관리</a>
            </li>
            <li>
                <a href="${root}/admin/category">카테고리 관리</a>
            </li>
        </ul>
    </div>
</aside>

<article></article>