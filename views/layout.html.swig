<!DOCTYPE html>
<html lang="zh_CN">
  <head>
    {% include "./partials/header.html.swig" with context only %}
    {% block css %}

    {% endblock %}
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
      {% include "./partials/menu.html.swig" with context only %}

      {% include "./partials/navigation.html.swig" with context only %}

      {% block content %}

      {% endblock %}

      {% include "./partials/footer.html.swig" with context only %}
      </div>
    </div>

    <!-- jQuery -->
    <script src="/admin/vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/admin/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/admin/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/admin/vendors/nprogress/nprogress.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="/admin/js/custom.min.js"></script>

    {% block script %}

    {% endblock %}
  </body>
</html>
